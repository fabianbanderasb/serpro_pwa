class Framework {
    ejecutarRequest(metodo, url, responseHandler, data) {
        let xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = () => {
            if (xmlHttp.readyState == 4) {
                if (xmlHttp.status == 200) {
                    let listaDisp = JSON.parse(xmlHttp.responseText);
                    responseHandler.cargarGrilla(listaDisp);
                }
                else {
                    alert("ERROR en la consulta");
                }
            }
        };
        xmlHttp.open(metodo, url, true);
        if (data != undefined) {
            xmlHttp.setRequestHeader("Content-Type", "application/json");
            xmlHttp.send(JSON.stringify(data));
        }
        else {
            xmlHttp.send();
        }
    }
    mostrarCargando() {
        let imgLoading = document.getElementById("loading");
        imgLoading.hidden = false;
    }
    ocultarCargando() {
        let imgLoading = document.getElementById("loading");
        imgLoading.hidden = true;
    }
}
