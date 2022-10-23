---
title: Introducción a virtualización
author: 
- UqbarUN
- FredyRosero
tags: [fundamentos, virtualización]
date: 2022-09-09
layout: post
categories: [fundamentos]
---
La **virtualización** o ***v12n*** (un *numeronym* donde 12 es el número de letras omitidas) es uno de los grandes avances de la informática, porque nos permite representar sistemas de hardware a nivel de software. Seguramente has escuchado de VirtualBox, de Docker o hasta de WSL como herramientas de virtualización, pero el método o tipo de virtualización de estas son diferentes, a continuación te explicamos.

## Capa de compatibildad
Cuando hablamos de capa de compatibilidad no hablamos de virtualización o emulación. La capa de compatibilidad se trata de una interfaz que traduce llamadas de sistema foráneas a llamadas de sistema nativas. Vale la pena mencionar este tema porque muchas personas confunden WSL-1 como una virtualización de Linux en Windows, cuando en realidad WSL-1 no implementa virtualización. 
- WSL-1, *Windows Subsystem for Linux Version 1*: Utiliza LXSS Manager Service para traducir llamadas POSIX API a llamadas API<sup>[1]</sup>.
- Cygwin: Traduce POSIX API a llamadas API.
- Wine, *Wine Is Not an Emulator*: Traduce llamadas de Windows API a llamadas POSIX API.


## Tipos de virtualización
1. Virtualización de Hardware
   1. **Full Virtualization** o **Emulation**: El SO huésped (sin modificar) no sabe que ha sido virtualizado
      1. **Hardware-assisted Virtualization (Virtualization technology)**: *Hypervisor Type 1* o *native hypervisor* o *bare metal hypervisor*. Usa Intel Virtualization Technology (VT-x) y AMD-V para utilizar directamente el hardware en sus procesos de emulación.
         - Microsoft Hyper-V
           - WSL-2, *Windows Subsystem for Linux Version 2*: WSL-2 utiliza funcionalidades de virtualización Hyper-V para correr el subsistema de linux como una máquina virtual a diferencia de WSL-1 donde no había virtualización sino una capa de compatibilidad
         - VMware ESX/ESXi
         - KVM
         - Oracle VM
         - Xen   
      2. **Software-assisted full Virtualization (Binary translation)**: *Hypervisor Type 2* o *hosted hypervisor*. A difenrencia de la virutalización asistida por hardware trabaja una capa mas arriba sobre el sistema operativo anfitrión para los procesos de simulación.
         - VMware Workstation
         - VMware Player
         - VirtualBox

    2. **OS-assisted Virtualization or Para-virtualization:** El SO huésped (modificado para para-virtualización) sabe que ha sido virtualizado y utiliza hiperllamadas a la capa de para-virtualización del anfitrión.
       - Xen
       - IBM LPAR 
       - Oracle VM for SPARC (LDOM) 
       - Oracle VM for X86 (OVM)
       - UML: User-mode Linux
    3. **OS-level Virtualization** o **Contenerización**: El anfitrión instancia múltiples instancias de espacio de usuario llamadas contenedores, *virtual environments*, *zones*, o *virtual kernels*
       - Linux LCX 
       - Docker 
       - Solaris containers
       - AIX WPAR
2. Virtualizacin de dispositivos
3. Virtualizacin de redes


## IOU
https://drive.google.com/file/d/11E3-sfzvyHAzWQmjhsk9_rqRCdN6l1q4/view?usp=sharing



## Qemu
Descargamos la imagen `kali-linux-2022.3-installer-amd64.iso` en https://www.kali.org/get-kali/#kali-installer-images


```bash
sudo apt update && sudo apt install virt-manager -y
```

```
virsh list --all
```


Mas info en https://www.kali.org/docs/virtualization/install-qemu-guest-vm/
## Docker
### Alpine
```
docker run --tty --interactive alpine
```

### Kali
```bash
docker pull kalilinux/kali-rolling
```
Mas info en https://www.kali.org/docs/containers/official-kalilinux-docker-images/

```
docker run --tty --interactive kalilinux/kali-rolling
```
Mas info en https://www.kali.org/docs/containers/using-kali-podman-images/

```
apt update
apt -y install iproute2 tcpdump
```

```
graph TD
    v[Virutalización]
    h[Hardware]
    Q[QEMU]
    D[Docker]
    k[KVM: Kernel-based Virtual Machine]
    v --- h --- pv[Para-virtualization] & fv[Full-virtualization]
    fv --- hav[Hardware-assisted Full-virtualization<br>Virtualization technology]
    fv --- sav[Software-assisted Full-virtualization<br>Binary traslation]
    hav --- h1[Hypervisor Typo 1] 
    sav --- h2[Hypervisor Typo 2]
    pv --- lxc[LinuX Containers]
    h1 --- h1a[Microsoft Hyper V] & h1b[VMware ESX/ESXi] & k
    h2 --- h2a[VMware Workstation] & h2b[VMware Player] & h2c[VirtualBox]
```

[1]: https://docs.microsoft.com/es-mx/archive/blogs/wsl/wsl-file-system-support
[2]: https://www.unixarena.com/2017/12/para-virtualization-full-virtualization-hardware-assisted-virtualization.html/

## GNS3
[NPCap vs WinPCap](https://npcap.com/vs-winpcap.html)