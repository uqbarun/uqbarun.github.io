---
title: Repositorios de conocimiento de ciberseguridad
---

# Repositorios de conocimiento de ciberseguridad

Haciendo la seguridad medible

## Inventario de activos
### CPE

CPE es un esquema de nomenclatura estructurado para sistemas de tecnología de la información, software y paquetes. Basado en la sintaxis genérica de los Identificadores de Recursos Uniformes (URI), CPE incluye un formato de nombre formal, un método para verificar nombres en un sistema y un formato de descripción para vincular texto y pruebas a un nombre del cual es responsable NIST. Una entrada de CPE puede referenciar una lista de CVE. La interfaz de búsqueda puede ser utilizada en el enlace <https://nvd.nist.gov/products/cpe/search>. 


La sintaxis de **CPE Names versión 2.3** sigue una estructura similar a la versión 2.2, con algunas modificaciones y adiciones `[^5]`:

```plaintext
cpe:2.3:[part]:[vendor]:[product]:[version]:[update]:[edition]:[language]:[sw_edition]:[target_sw]:[target_hw]:[other]
```

Donde:
* `cpe:2.3:` Indica la versión del estándar CPE que se está utilizando.
* `[part]`: Representa la parte del producto o componente. Por ejemplo, puede ser "a" para una aplicación, "o" para un sistema operativo, "h" para un hardware, etc.
* `[vendor]`:  Identifica al proveedor o fabricante del producto.
* `[product]`: Es el nombre del producto en sí.
* `[version]`: Indica la versión del producto. Puede dejarse con un guión`-` si no tiene versiones.
* Las siguientes 8 partes son opcionales, y pueden dejarse con un asterisco `*`:	
	* `[update]`: (opcional) representa el nivel de actualización o parche del software. Se utiliza para indicar una actualización o versión de parche específica.
	* `[edition]`: (opcional) representa la edición o variante del software, como "Professional", "Enterprise" o "Home Edition".
	* `[language]`: (opcional) representa la versión específica del software en un idioma determinado, como "en" para inglés.
	* `[sw_edition]`: opcional y representa la edición de software adicional o más específica.
	* `[target_sw]`: (opcional) representa el software objetivo o el entorno de ejecución requerido por el software.
	* `[target_hw]`: (opcional) representa el hardware objetivo requerido para ejecutar el software.
	* `[other]`: (opcional) se utiliza para incluir cualquier otro campo adicional o información relevante.


Para fines prácticos si solo se tiene el producto y fabricante se puede utilzar la siguiente sintaxis:
```plaintext
cpe:2.3:parte:fabricante:producto:version:*:*:*:*:*:*:*
```

Por ejemplo para cualquier para la versiones 8.1.18, 8.2 y 8 de PHP tenemos respectivamente
```plaintext
cpe:2.3:a:php:php:8.1.18:*:*:*:*:*:*:*
cpe:2.3:a:php:php:8.2:*:*:*:*:*:*:*
cpe:2.3:a:php:php:8:*:*:*:*:*:*:*
```

#### Consulta rápida desde CVE Details

Una forma rápida para consultar 
2. CVE Details (Product search)
2. CVE Details (Product Security Vulnerabilities)
3. CVE NVD (Details)
4. CVE NVD (Known Affected Software Configurations)

#### API
```bash
cpe=cpe:2.3:a:php:php:8.2:*:*:*:*:*:*:*
curl -v https://services.nvd.nist.gov/rest/json/cves/2.0?cpeName=$cpe
```

```bash
curl -s https://services.nvd.nist.gov/rest/json/cves/2.0?cpeName=$cpe | jq . 
```

## Análisi de vulnerabilidades

### CVE

### 




https://makingsecuritymeasurable.mitre.org/

https://makingsecuritymeasurable.mitre.org/docs/MSM_Measurement_and_Architecture_diagram_handout.pdf