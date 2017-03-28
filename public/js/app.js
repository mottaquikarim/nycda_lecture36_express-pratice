(function() {

    const GET = (url = null) => {
        return new Promise((resolve, reject) => {
            if (url === null) {
                reject('URL not valid');
            }

            const http = new XMLHttpRequest();
            http.open('GET', url);

            http.onload = () => {
                try {
                    const jsonData = JSON.parse(http.responseText);
                    resolve(jsonData);
                } catch (e) {
                    reject(e);
                }
            } // onload

            http.send();
        });
    }

    GET('http://localhost:3000/api/info')
        .then((data) => {
            document.querySelector('.js-title').innerHTML = data.message;
        })
        .catcH((e) => {
            alert(e);
        });

})();
