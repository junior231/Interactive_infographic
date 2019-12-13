  
(() => {
    // try to get the object and do stop with it

    const seeMoreButtons = document.querySelectorAll('.see-more'),
        popOver = document.querySelector('.popover')

    const waypoint = new Waypoint({
        // what element is waypoint looking at?
        // the handler will fire when it scrolls down

        element: document.getElementById('beer2'),
        // what should we do when we hit the waypoint? this is up to you
        // you can trigger animation, do an AJAX call... whatever
        handler: function(direction) {
          console.log('Scrolled to waypoint!')
        //   this.element.innerHTML += `<p>Added this with waypoint ${direction}</p>`
        },

        offset: 400
      })

    //   const waypoint2 = new Waypoint({
    //     // what element is waypoint looking at?
    //     // the handler will fire when it scrolls down

    //     element: document.getElementById('beer3'),
    //     // what should we do when we hit the waypoint? this is up to you
    //     // you can trigger animation, do an AJAX call... whatever
    //     handler: function(direction) {
    //       console.log('Scrolled to waypoint 2!')
    //     },

    //     offset: 400
    //   })

    function buildPopover(beerdata, el) {
        popOver.querySelector(".ipa-rating").textContent = `Title: ${beerdata.Title}`;
        popOver.querySelector(".ratings").textContent = `Description: ${beerdata.Description}`;
        // popOver.querySelector(".beer-description").textContent = beerdata.description;


        // show the popover
        popOver.classList.add('show-popover');
        el.appendChild(popOver);
    }



    // run the fetch API and get DB data
    function fetchData() {
        let targetEl = this,
            url = `/svgdata/${this.dataset.target}`;

        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);

            // populate the popover
            buildPopover(data, targetEl);
        })
        .catch((err) => console.log(err));
    }

    const svgGraphic = document.querySelector("#beer-glass");

    // svgGraphic.addEventListener("click", () => {
    //     console.log(this.querySelector('.svg-graphic'));
    // })

    seeMoreButtons.forEach(button => button.addEventListener("click", fetchData));
})();