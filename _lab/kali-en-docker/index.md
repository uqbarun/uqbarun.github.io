---
title: Kali en docker
---

# Kali en docker

```bash
docker pull kalilinux/kali-rolling
```
<https://hub.docker.com/r/kalilinux/kali-last-release>

> `kali-linux-headless`: Default install that doesn’t require GUI
> `kali-tools-wireless`: All tools based around Wireless protocols – 802.11, Bluetooth, RFID & SDR
> `kali-tools-sniffing-spoofing`: Any tools meant for sniffing & spoofing
> <https://www.kali.org/docs/general-use/metapackages/>

```dockerfile
FROM kalilinux/kali-rolling
MAINTAINER Your Name <uqbar@unal.edu.co>
RUN apt-get update
RUN apt update && apt -y install kali-linux-headless
WORKDIR /root
CMD ["/bin/bash"]
```

<https://forums.kali.org/showthread.php?54492-Installing-Kali-metapackage-that-requires-a-GUI-for-interaction>


```bash
docker build -t kali-with-tools .
```

```bash
docker run -it kali-with-tools
```