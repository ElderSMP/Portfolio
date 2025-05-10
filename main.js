var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");
        
        function opentab(tabname) {
            for(tablink of tablinks) {
                tablink.classList.remove("active-link");
            }
            for(tabcontent of tabcontents) {
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }

        // Mobile menu functionality
        var sidemenu = document.getElementById("sidemenu");
        
        function openmenu() {https://eldersmp.github.io/Portfolio/
            sidemenu.style.right = "0";
        }
        
        function closemenu() {
            sidemenu.style.right = "-200px";
        }

        // See more button functionality
        document.getElementById("seeMoreBtn").addEventListener("click", function(e) {
            e.preventDefault();
            var hiddenProjects = document.getElementById("hiddenProjects");
            var seeMoreBtn = document.getElementById("seeMoreBtn");
            
            if (hiddenProjects.style.display === "none") {
                hiddenProjects.style.display = "grid";
                seeMoreBtn.textContent = "Show less";
            } else {
                hiddenProjects.style.display = "none";
                seeMoreBtn.textContent = "See more";
            }
        });