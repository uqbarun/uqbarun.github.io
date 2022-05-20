#!/bin/bash
# https://jekyllrb.com/docs/front-matter/
Create() {
    title="$@"
    author='Fredy Rosero'
    date=$(date +%F)

    FILENAME="${date}-${title// /-}.md"

    HEDAER="---\n"
    HEDAER+="title: ${title}\n"
    HEDAER+="author: ${author}\n"
    HEDAER+="tags: [tag1, tag2]\n"
    HEDAER+="date: ${date}'\n"
    HEDAER+="layout: post\n"
    HEDAER+="categories: [category]\n"
    HEDAER+="excerpt_separator: <!--more-->\n"
    HEDAER+="---\n"

    BODY="![thumbnail]()\n\n"
    BODY+="Abstract.\n"
    BODY+=" <!--more-->\n\n"
    BODY+="## Section 1.\n"
    BODY+="Body of Section 1.\n"

    echo -e $HEDAER$BODY > "./_drafts/${FILENAME}"
}

while getopts ":h" option; do
    case $option in
    ?|h) 
        echo "usage: $(basename $0) [post's tittle]"
        exit 1
        ;;
    esac
    
done
if [ $OPTIND -eq 1 ]; then Create "$@"; fi
shift $((OPTIND-1))
exit 1