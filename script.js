<script>
    document.addEventListener("DOMContentLoaded", function () {
        var animatedDiv = document.getElementById("animated-div");

        function checkScroll() {
            if (isElementInViewport(animatedDiv)) {
                animatedDiv.style.animation = "none"; // Reset animation
                void animatedDiv.offsetWidth; // Trigger reflow
                animatedDiv.style.animation = "slideIn 2s ease-out forwards"; // Apply animation
            }
        }

        function isElementInViewport(el) {
            var rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        window.addEventListener("scroll", checkScroll);
    });
</script>
