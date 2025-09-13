document.addEventListener('DOMContentLoaded', () => {

    // 1. Checkbox Sparkle Animation
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            if (e.target.checked) {
                createSparkles(e.target);
            }
        });
    });

    function createSparkles(checkbox) {
        const wrapper = checkbox.parentElement;
        const rect = wrapper.getBoundingClientRect();

        for (let i = 0; i < 15; i++) {
            const sparkle = document.createElement('div');
            sparkle.style.position = 'fixed';
            sparkle.style.left = ${rect.left + rect.width / 2}px;
            sparkle.style.top = ${rect.top + rect.height / 2}px;
            sparkle.style.width = ${Math.random() * 8 + 2}px;
            sparkle.style.height = sparkle.style.width;
            sparkle.style.borderRadius = '50%';
            sparkle.style.backgroundColor = hsl(${Math.random() * 360}, 90%, 70%);
            sparkle.style.zIndex = '1000';
            sparkle.style.pointerEvents = 'none';

            document.body.appendChild(sparkle);

            const angle = Math.random() * 360;
            const distance = Math.random() * 50 + 50;
            
            const x = Math.cos(angle * (Math.PI / 180)) * distance;
            const y = Math.sin(angle * (Math.PI / 180)) * distance;

            sparkle.animate([
                { transform: 'translate(0, 0) scale(1)', opacity: 1 },
                { transform: translate(${x}px, ${y}px) scale(0), opacity: 0 }
            ], {
                duration: 600 + Math.random() * 400,
                easing: 'ease-out'
            }).onfinish = () => {
                sparkle.remove();
            };
        }
    }

    // 2. Submit Button Pop/Bubble Animation
    const submitBtn = document.getElementById('submit-btn');

    if (submitBtn) {
        submitBtn.addEventListener('click', (e) => {
            createBubbles(e);
        });
    }

    function createBubbles(event) {
        const rect = event.target.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        for (let i = 0; i < 30; i++) {
            const bubble = document.createElement('div');
            bubble.style.position = 'absolute';
            bubble.style.left = ${x}px;
            bubble.style.top = ${y}px;
            bubble.style.width = ${Math.random() * 20 + 5}px;
            bubble.style.height = bubble.style.width;
            bubble.style.borderRadius = '50%';
            bubble.style.background = hsla(${Math.random() * 50 + 10}, 100%, 75%, 0.8); // Shades of orange/yellow
            bubble.style.pointerEvents = 'none';
            
            event.target.appendChild(bubble);

            const angle = Math.random() * 360;
            const distance = Math.random() * 50 + 70;
            const finalX = Math.cos(angle * (Math.PI / 180)) * distance;
            const finalY = Math.sin(angle * (Math.PI / 180)) * distance;

            bubble.animate([
                { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
                { transform: translate(calc(-50% + ${finalX}px), calc(-50% + ${finalY}px)) scale(0), opacity: 0 }
            ], {
                duration: 800 + Math.random() * 500,
                easing: 'ease-out'
            }).onfinish = () => {
                bubble.remove();
            };
        }
    }
});