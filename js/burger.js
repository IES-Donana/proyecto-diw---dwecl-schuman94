let navdiv = document.getElementById("navdiv");
    console.log(navdiv);
let navmenu = document.getElementsByClassName("navham");
    console.log(navmenu);

    navdiv.addEventListener("mouseover", ratonentra);
    navdiv.addEventListener("mouseout", ratonsale);
    navdiv.addEventListener("click", condicionalmenu);


    function ratonentra() {
        /* console.log(caja) */


       for (const barra of navmenu) {
           /* console.log(barra) */

           barra.style.border = "solid 2px";

       }
    }
    function ratonsale() {

        for (const barra of navmenu) {
           /* console.log(barra) */

           barra.style.border = "solid 0px";

       }
    }
    let abierto = false;
    function condicionalmenu() {
        if (abierto) {
            cerrar();
        } else {
            abrir();
        }
    }
    function abrir() {
        navdiv.style.transition = "1s";
        navdiv.style.opacity = "0";

        crear();
        setTimeout(aparece, 1000);
        abierto = true;
    }

    function aparece() {
        navdiv.style.opacity = "1";
        navdiv.innerHTML = "<img src='./images/x.png'>";
    }



    function cerrar() {
        navdiv.style.transition = "1s";
        navdiv.style.opacity = "0";
        setTimeout(aparece2, 1000);
        abierto = false;
        eliminar();
    }

    function aparece2() {
        navdiv.style.opacity = "1";
        navdiv.innerHTML = "<img src='./images/menu-oscuro.png'>";
    }

    let comprobar = true;
    function crear() {

    let crea = document.createElement("div");
    crea.classList.add("divvisible");
    crea.setAttribute("id", "fuera" );



    let enlace1 = document.createElement("a");
    enlace1.setAttribute("href", "#proyectos" );
    enlace1.classList.add("enlacevisible");
    enlace1.textContent = "Proyectos";
    crea.appendChild(enlace1);

    enlace1.addEventListener('click', cerrar);

    let enlace2 = document.createElement("a");
    enlace2.setAttribute("href", "#testimonios"  );
    enlace2.classList.add("enlacevisible");
    enlace2.textContent = "Testimonios";
    crea.appendChild(enlace2);

    enlace2.addEventListener('click', cerrar);

    let enlace3 = document.createElement("a");
    enlace3.setAttribute("href", "#cv" );
    enlace3.classList.add("enlacevisible");
    enlace3.textContent = "CV";
    crea.appendChild(enlace3);

    enlace3.addEventListener('click', cerrar);

    let enlace4 = document.createElement("a");
    enlace4.setAttribute("href", "#sobremi" );
    enlace4.classList.add("enlacevisible");
    enlace4.textContent = "Sobre mi";
    crea.appendChild(enlace4);
    console.log(crea);

    enlace4.addEventListener('click', cerrar);

    let enlace5 = document.createElement("a");
    enlace5.setAttribute("href", "#contacto" );
    enlace5.classList.add("enlacevisible");
    enlace5.textContent = "Contacto";
    crea.appendChild(enlace5);
    console.log(crea);

    enlace5.addEventListener('click', cerrar);

    if (comprobar) {
        navdiv.insertAdjacentElement("afterend", crea);
        setTimeout(animarenlaces, 1000);
        comprobar = false;
    } else {
        let fuera = document.getElementById("fuera");
        animarenlaces2();
        setTimeout(function(){ fuera.remove(); }, 5000);

        comprobar = true;
    }

}

    function animarenlaces() {
        let enlaceall = document.getElementsByClassName("enlacevisible");

        for (const enlace of enlaceall) {
            enlace.style.opacity = "1";
            enlace.style.transform = "translate(0vw, -7vh)";
        }

    }

    function animarenlaces2() {
        let enlaceall = document.getElementsByClassName("enlacevisible");

        for (const enlace of enlaceall) {
            enlace.style.display = "flex";
            enlace.style.opacity = "0";
            enlace.style.transform = "rotate(360deg)";
        }

    }

    function eliminar() {
        crear();
    }
