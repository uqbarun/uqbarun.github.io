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

[1]: https://docs.microsoft.com/es-mx/archive/blogs/wsl/wsl-file-system-support
[2]: https://www.unixarena.com/2017/12/para-virtualization-full-virtualization-hardware-assisted-virtualization.html/