---
title: Modelo CID
---

# Etimología de CIA y CIAAA

## Modelo de tríada CID

![Source: [https://www.nist.gov/image/cia-triad](https://www.nist.gov/image/cia-triad)](Etimologi%CC%81a%20de%20CIA%20y%20CIAAA%2092e93b9f4218418f8a9350e51fbc4c9a/Untitled.png)

Source: [https://www.nist.gov/image/cia-triad](https://www.nist.gov/image/cia-triad)

La tríada CID (en ingles, *******************CIA triad*******************) es un modelo de seguridad de la información que consta de tres componentes: **Confidentiality** (confidencialidad), **Integrity** (integridad) y  **availability** (disponibilidad). El concepto no tiene un solo creador, pero surgió con el tiempo como un conocimiento emergente  entre los profesionales de la seguridad.

### [**1975**] **The Protection of Information in Computer Systems**

Manuscript received October 11, 1974; revised April 17. **1975**.

> Security specialists (e.g., Anderson [6] ) have found it useful to place potential security violations in three categories.
> 
> 1. Unauthorized information release (**Confidentiality**): an unauthorized person is able to read and take advantage of information stored in the computer. This category of concern sometimes extends to "traffic analysis," in which the intruder observes only the patterns of information use and from those patterns can infer some information content. It also includes unauthorized use of a proprietary program.
> 2. Unauthorized information modification (**Integrity**): an unauthorized person is able to make changes in stored information--a form of sabotage. Note that this kind of violation does not require that the intruder see the information he has changed.
> 3. Unauthorized denial of use (**availability**): an intruder can prevent an authorized user from referring to or modifying information, even though the intruder may not be able to refer to or modify the information. Causing a system "crash," disrupting a scheduling algorithm, or firing a bullet into a computer are examples of denial of use. This is another form of sabotage.
> 
> [Saltzer and Schroeder, The Protection of Information in Computer Systems](https://www.cs.virginia.edu/~evans/cs551/saltzer/)
> 

### [**1976**] Confidencialidad

> **Confidentiality** being addressed by [LaPadula and Bell](http://csrc.nist.gov/publications/history/bell76.pdf) in **1976** in their mandatory access control model for Honeywell Multics…
> 
> 
> [CIA Triad](http://blog.electricfork.com/2010/03/cia-triad.html)
> 

### [**1987**] Integridad

> I found [Clark and Wilson](http://theory.stanford.edu/~ninghui/courses/Fall03/papers/clark_wilson.pdf) work in **1987** on **Integrity** recognizing the commercial sector’s primary focus was on the Integrity of the data on their information systems (think: accounting data). Both of these were derived as “multilevel security” (think: [orange book](https://irp.fas.org/nsa/rainbow/std001.htm), 1983) as an operating system design principle…
> 
> 
> [CIA Triad](http://blog.electricfork.com/2010/03/cia-triad.html)
> 

### [**1988**] Disponibilidad

> The conception of **availability** is not clearly known, but the idea rose to prominence in **1988** due to the attack of the [Morris worm](https://en.wikipedia.org/wiki/Morris_worm),  which had devastating effects back then on thousands of major UNIX machines and the internet had to be partitioned for days to fix the mess.
> 
> 
> [What is the CIA Triad? Definition, Importance and Examples](https://intellipaat.com/blog/the-cia-triad/)
> 

### [**1989**] Modelo Triada CID

![Source: [https://www.nist.gov/image/cia-triad](https://www.nist.gov/image/cia-triad)](Etimologi%CC%81a%20de%20CIA%20y%20CIAAA%2092e93b9f4218418f8a9350e51fbc4c9a/Untitled.png)

Source: [https://www.nist.gov/image/cia-triad](https://www.nist.gov/image/cia-triad)

> The term was coined at the Johnson Space Center, USA [17] and, for the first time, appeared in a JSC-NASA Information Security Plan, also known as “The Pink Book” in 1989.
> 
> 
> [](https://users.cs.cf.ac.uk/Y.V.Cherdantseva/RMIAS.pdf)
> 

### [**1991**] Modelo Cubo de McCumber

![Source: [https://ieeexplore-ieee-org.ezproxy.unal.edu.co/document/8666559](https://ieeexplore-ieee-org.ezproxy.unal.edu.co/document/8666559)](Etimologi%CC%81a%20de%20CIA%20y%20CIAAA%2092e93b9f4218418f8a9350e51fbc4c9a/Untitled%201.png)

Source: [https://ieeexplore-ieee-org.ezproxy.unal.edu.co/document/8666559](https://ieeexplore-ieee-org.ezproxy.unal.edu.co/document/8666559)

According to the information provided, the McCumber Cube was introduced by John McCumber, and the book Assessing and Managing Security Ris in IT Systems: A Structured Methodology, where it is described, was published in 1991.

[Assessing and Managing Security Risk in IT Systems](https://books.google.com.co/books?id=ugN-DwAAQBAJ&printsec=frontcover&redir_esc=y#v=onepage&q&f=false)

### [**2000**] Teorema CAP o Conjetura de Brewer

Distributed Databases.

![Source: [https://www.researchgate.net/figure/Visualization-of-CAP-theorem_fig2_282679529](https://www.researchgate.net/figure/Visualization-of-CAP-theorem_fig2_282679529)](Etimologi%CC%81a%20de%20CIA%20y%20CIAAA%2092e93b9f4218418f8a9350e51fbc4c9a/Untitled%202.png)

Source: [https://www.researchgate.net/figure/Visualization-of-CAP-theorem_fig2_282679529](https://www.researchgate.net/figure/Visualization-of-CAP-theorem_fig2_282679529)

La Conjetura de Brewer de bases de datos, por su parte, es una teoría propuesta por el informático estadounidense Eric Brewer en el año **2000** [[?]](https://www.infoq.com/articles/cap-twelve-years-later-how-the-rules-have-changed/). Según esta conjetura, es imposible que un sistema distribuido de bases de datos pueda garantizar simultáneamente las tres siguientes propiedades: **consistencia** (todos los nodos ven los mismos datos al mismo tiempo), **disponibilidad** (cada solicitud de datos recibe una respuesta, sin garantía de que sea la última versión de los datos) y **tolerancia a particiones** (el sistema sigue funcionando aunque se produzcan fallos en la red). Brewer afirmaba que sólo era posible garantizar dos de estas tres propiedades al mismo tiempo.

### [2001] Information Assurance Model

![Source: [https://www.researchgate.net/figure/nformation-Assurance-Model_fig4_235470635](https://www.researchgate.net/figure/nformation-Assurance-Model_fig4_235470635)](Etimologi%CC%81a%20de%20CIA%20y%20CIAAA%2092e93b9f4218418f8a9350e51fbc4c9a/Untitled%203.png)

Source: [https://www.researchgate.net/figure/nformation-Assurance-Model_fig4_235470635](https://www.researchgate.net/figure/nformation-Assurance-Model_fig4_235470635)

> The model presented in this paper [Information Assurance Model] is an extension of work reported in 1991 by John McCumber. His model provided an abstract research and pedagogic framework for the profession.
> 
> 
> [(PDF) A Model for Information Assurance:An Integrated Approach](https://www.researchgate.net/publication/235470635_A_Model_for_Information_AssuranceAn_Integrated_Approach)
> 

> **Information Assurance**
Measures that protect and defend information and information systems by ensuring their **availability**, **integrity**, **authentication**, **confidentiality**, and **non-repudiation**. These measures include providing for restoration of information systems by incorporating protection, detection, and reaction capabilities 
[CNSS 4009]
> 

### Modelo CIAAN

El modelo CIAAN se deriva de los pilares de **Information Assurance** (IA).

### [**2002**] Modelo hexágono parkeriano

![Source: [https://cs.lewisu.edu/mathcs/msisprojects/papers/georgiependerbey.pdf](https://cs.lewisu.edu/mathcs/msisprojects/papers/georgiependerbey.pdf)](Etimologi%CC%81a%20de%20CIA%20y%20CIAAA%2092e93b9f4218418f8a9350e51fbc4c9a/Untitled%204.png)

Source: [https://cs.lewisu.edu/mathcs/msisprojects/papers/georgiependerbey.pdf](https://cs.lewisu.edu/mathcs/msisprojects/papers/georgiependerbey.pdf)

> In **2002**, Donn B. Parker, currently a retired information security consultant and
> 
> 
> researcher, introduced an expanded version of the CIA model the added three additional
> 
> elements.
> 
> [](http://cs.lewisu.edu/mathcs/msisprojects/papers/georgiependerbey.pdf)
> 

### Modelo CIAAA

El modelo CIAAA en la literatura académica reciente se plantea como una extensión de la triada CID, al agregar dos conceptos:

![Source: William Stallings, Cryptography and Network Security, 2018](Etimologi%CC%81a%20de%20CIA%20y%20CIAAA%2092e93b9f4218418f8a9350e51fbc4c9a/Untitled%205.png)

Source: William Stallings, Cryptography and Network Security, 2018

> * **Authenticity**: The property of being genuine and being able to be verified and
trusted; confidence in the validity of a transmission, a message, or message
originator. This means verifying that users are who they say they are and that
each input arriving at the system came from a trusted source.
* **Accountability**: The security goal that generates the requirement for actions
of an entity to be traced uniquely to that entity. This supports **nonrepudia-
tion**, deterrence, fault isolation, intrusion detection and prevention, and after-
action recovery and legal action. Because truly secure systems are not yet an
achievable goal, we must be able to trace a security breach to a responsible
party. Systems must keep records of their activities to permit later forensic
analysis to trace security breaches or to aid in transaction disputes.
> 
> 
> [Cryptography and Network Security: Principles and Practice, Global Edition](https://www.google.com.co/books/edition/_/dogWDQAAQBAJ?hl=es-419&kptab=overview)
> 

## Para leer

- [https://www.cs.utexas.edu/~byoung/cs361c/slides1-intro.pdf](https://www.cs.utexas.edu/~byoung/cs361c/slides1-intro.pdf)
- [https://www.julianbrowne.com/article/brewers-cap-theorem/](https://www.julianbrowne.com/article/brewers-cap-theorem/)
- TCSEC (Orange Book) [https://irp.fas.org/nsa/rainbow/std001.htm](https://irp.fas.org/nsa/rainbow/std001.htm)
- [http://cs.lewisu.edu/mathcs/msisprojects/papers/georgiependerbey.pdf](http://cs.lewisu.edu/mathcs/msisprojects/papers/georgiependerbey.pdf)
- [https://oig.nasa.gov/docs/ig-00-055.pdf](https://oig.nasa.gov/docs/ig-00-055.pdf)
- [https://users.cs.cf.ac.uk/Y.V.Cherdantseva/RMIAS.pdf](https://users.cs.cf.ac.uk/Y.V.Cherdantseva/RMIAS.pdf)