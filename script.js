// Interactive JavaScript for Birthday Website

document.addEventListener('DOMContentLoaded', function() {
    // Balloon click effect
    const balloons = document.querySelectorAll('.balloon');
    balloons.forEach(balloon => {
        balloon.addEventListener('click', function() {
            // Add pop animation
            this.style.transform = 'scale(1.5)';
            this.style.opacity = '0';
            
            // Create pop sound effect
            const popSound = new Audio();
            popSound.src = 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFd2xqZ2VjXl1bWVhXVlVUU1JRUFFOTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAA==';
            
            setTimeout(() => {
                this.style.display = 'none';
                // Create new balloon after delay
                setTimeout(() => {
                    this.style.display = 'block';
                    this.style.transform = 'scale(1)';
                    this.style.opacity = '1';
                }, 2000);
            }, 300);
        });
    });

    // Add CSS for sparkle animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes sparkleFade {
            0% { 
                opacity: 1; 
                transform: scale(1) translateY(0);
            }
            100% { 
                opacity: 0; 
                transform: scale(0) translateY(-50px);
            }
        }
    `;
    document.head.appendChild(style);

    // Add celebration message on double click
    document.addEventListener('dblclick', function() {
        const celebration = document.createElement('div');
        celebration.innerHTML = '<div>dor</div><img src="assets/kucing2.jpg" alt="Cat" style="width: 120px; height: auto; margin-top: 10px; border-radius: 8px; display: block; margin-left: auto; margin-right: auto;">';
        celebration.style.position = 'fixed';
        celebration.style.top = '50%';
        celebration.style.left = '50%';
        celebration.style.transform = 'translate(-50%, -50%)';
        celebration.style.fontSize = '3rem';
        celebration.style.fontWeight = 'bold';
        celebration.style.color = '#ff1493';
        celebration.style.textShadow = '2px 2px 10px rgba(255, 255, 255, 0.8)';
        celebration.style.zIndex = '2000';
        celebration.style.pointerEvents = 'none';
        celebration.style.animation = 'celebrationPop 2s forwards';
        celebration.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
        celebration.style.padding = '20px 30px';
        celebration.style.borderRadius = '15px';
        celebration.style.textAlign = 'center';
        
        document.body.appendChild(celebration);
        
        // Remove celebration message
        setTimeout(() => {
            celebration.remove();
        }, 2000);
    });

    // Add CSS for celebration animation
    const celebrationStyle = document.createElement('style');
    celebrationStyle.textContent = `
        @keyframes celebrationPop {
            0% { 
                opacity: 0; 
                transform: translate(-50%, -50%) scale(0.5);
            }
            50% { 
                opacity: 1; 
                transform: translate(-50%, -50%) scale(1.2);
            }
            100% { 
                opacity: 0; 
                transform: translate(-50%, -50%) scale(0.8);
            }
        }
    `;
    document.head.appendChild(celebrationStyle);

    // Make cake clickable for surprise
    const cake = document.querySelector('.cake');
    cake.addEventListener('click', function() {
        // Add bounce animation
        this.style.animation = 'cakeBounce 0.5s';
        
        // Change candle flame color temporarily
        const flame = document.querySelector('.flame');
        flame.style.background = 'radial-gradient(circle, #00ffff 30%, #0066ff 70%)';
        
        setTimeout(() => {
            flame.style.background = 'radial-gradient(circle, #ffff00 30%, #ff4500 70%)';
            this.style.animation = 'cakeBob 3s ease-in-out infinite';
        }, 500);
    });

    // Add CSS for cake bounce
    const bounceStyle = document.createElement('style');
    bounceStyle.textContent = `
        @keyframes cakeBounce {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }
    `;
    document.head.appendChild(bounceStyle);

    // Auto-play background music suggestion
    console.log("🎵 Tip: You can add background music by placing an audio file named 'birthday.mp3' in this folder and uncommenting the audio element in HTML");
    
    // Photo Gallery Functionality
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // Game logic for photo clicks
    let clickedPhotos = new Set();
    const totalPhotos = 4;
    
    // Handle photo clicks for game (without lightbox)
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            // Track clicked photos for game logic
            clickedPhotos.add(index);
            
            // Add checkmark to clicked photo
            addCheckmark(item);
            
            // Add visual feedback for click
            item.style.transform = 'scale(0.95)';
            setTimeout(() => {
                item.style.transform = '';
            }, 200);
            
            // Check if all photos have been clicked
            if (clickedPhotos.size === totalPhotos) {
                setTimeout(() => {
                    showGameCompletionMessage();
                    resetGame();
                }, 1000);
            }
        });
    });
    
    // Close lightbox
    function closeLightbox() {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto'; // Enable scrolling
    }
    
    closeBtn.addEventListener('click', closeLightbox);
    
    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Keyboard navigation for lightbox
    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'block') {
            if (e.key === 'Escape') {
                closeLightbox();
            }
        }
    });
    
    // Add CSS for lightbox zoom animation
    const lightboxStyle = document.createElement('style');
    lightboxStyle.textContent = `
        @keyframes lightboxZoomIn {
            0% { 
                transform: scale(0.8); 
                opacity: 0; 
            }
            100% { 
                transform: scale(1); 
                opacity: 1; 
            }
        }
    `;
    document.head.appendChild(lightboxStyle);
    
    // Gallery hover effects with additional animations
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            // Add subtle vibration effect
            item.style.animation = 'galleryShake 0.5s';
        });
        
        item.addEventListener('animationend', () => {
            item.style.animation = '';
        });
    });
    
    // Add shake animation for gallery items
    const shakeStyle = document.createElement('style');
    shakeStyle.textContent = `
        @keyframes galleryShake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-2px); }
            75% { transform: translateX(2px); }
        }
    `;
    document.head.appendChild(shakeStyle);
    
    // Lazy loading observer for gallery images
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    }, { threshold: 0.1 });
    
    // Observe all gallery images
    document.querySelectorAll('.gallery-item img').forEach(img => {
        imageObserver.observe(img);
    });
    
    // Add scroll reveal animation for gallery section
    const gallerySection = document.querySelector('.photo-gallery');
    const galleryObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                galleryObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    galleryObserver.observe(gallerySection);
    
    // Function to show game completion message
    function showGameCompletionMessage() {
        const completionMessage = document.createElement('div');
        completionMessage.innerHTML = '<div>everything about u is cute</div><img src="assets/kucing.jpg" alt="Cat" style="width: 150px; height: auto; margin-top: 15px; border-radius: 10px; display: block; margin-left: auto; margin-right: auto;">';
        completionMessage.style.position = 'fixed';
        completionMessage.style.top = '50%';
        completionMessage.style.left = '50%';
        completionMessage.style.transform = 'translate(-50%, -50%)';
        completionMessage.style.fontSize = '2.5rem';
        completionMessage.style.fontFamily = "'Dancing Script', cursive";
        completionMessage.style.color = '#ff1493';
        completionMessage.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
        completionMessage.style.padding = '30px 50px';
        completionMessage.style.borderRadius = '20px';
        completionMessage.style.boxShadow = '0 10px 30px rgba(255, 20, 147, 0.3)';
        completionMessage.style.zIndex = '2000';
        completionMessage.style.textAlign = 'center';
        completionMessage.style.animation = 'popIn 1s forwards';
        
        document.body.appendChild(completionMessage);
        
        // Remove message after 5 seconds
        setTimeout(() => {
            completionMessage.style.animation = 'fadeOut 1s forwards';
            setTimeout(() => {
                completionMessage.remove();
            }, 1000);
        }, 5000);
    }
    
    // Function to add checkmark to clicked photo
    function addCheckmark(item) {
        // Check if checkmark already exists
        if (!item.querySelector('.checkmark')) {
            const checkmark = document.createElement('div');
            checkmark.innerHTML = '✓';
            checkmark.className = 'checkmark';
            checkmark.style.position = 'absolute';
            checkmark.style.top = '50%';
            checkmark.style.left = '50%';
            checkmark.style.transform = 'translate(-50%, -50%)';
            checkmark.style.fontSize = '3rem';
            checkmark.style.color = '#4CAF50';
            checkmark.style.fontWeight = 'bold';
            checkmark.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.5)';
            checkmark.style.zIndex = '10';
            checkmark.style.pointerEvents = 'none';
            
            item.appendChild(checkmark);
        }
    }
    
    // Function to reset the game
    function resetGame() {
        clickedPhotos.clear();
        
        // Remove all checkmarks
        document.querySelectorAll('.checkmark').forEach(checkmark => {
            checkmark.remove();
        });
    }
    
    // Add CSS for game completion animations
    const gameStyle = document.createElement('style');
    gameStyle.textContent = `
        @keyframes popIn {
            0% { 
                transform: translate(-50%, -50%) scale(0.5); 
                opacity: 0; 
            }
            70% { 
                transform: translate(-50%, -50%) scale(1.1); 
            }
            100% { 
                transform: translate(-50%, -50%) scale(1); 
                opacity: 1; 
            }
        }
        
        @keyframes fadeOut {
            0% { opacity: 1; }
            100% { opacity: 0; }
        }
    `;
    document.head.appendChild(gameStyle);
    
    // Background Music Functionality
    const bgMusic = document.getElementById('bg-music');
    const musicControl = document.getElementById('music-control');
    const musicIcon = document.getElementById('music-icon');
    
    // Ensure the audio can play after user interaction
    window.addEventListener('load', () => {
        // Small delay to ensure DOM is fully loaded
        setTimeout(() => {
            // Try to play music automatically, but handle browser restrictions
            bgMusic.play().then(() => {
                console.log('Music is playing automatically');
            }).catch(error => {
                console.log('Autoplay prevented by browser:', error);
                console.log('Music will play after first user interaction');
            });
        }, 100);
    });
    
    // Toggle music on button click
    musicControl.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play().then(() => {
                musicIcon.textContent = '🔊';
                musicControl.classList.remove('muted');
                console.log('Music resumed');
            }).catch(error => {
                console.log('Error playing music:', error);
            });
        } else {
            bgMusic.pause();
            musicIcon.textContent = '🔇';
            musicControl.classList.add('muted');
            console.log('Music paused');
        }
    });
    
    // Play music on any user interaction as fallback
    const enableMusicOnInteraction = () => {
        bgMusic.play().then(() => {
            musicIcon.textContent = '🔊';
            musicControl.classList.remove('muted');
            console.log('Music started after user interaction');
        }).catch(error => {
            console.log('Could not play music after interaction:', error);
        });
        
        // Remove listeners after first interaction to prevent repeated attempts
        document.removeEventListener('click', enableMusicOnInteraction);
        document.removeEventListener('touchstart', enableMusicOnInteraction);
        document.removeEventListener('keydown', enableMusicOnInteraction);
    };
    
    document.addEventListener('click', enableMusicOnInteraction);
    document.addEventListener('touchstart', enableMusicOnInteraction);
    document.addEventListener('keydown', enableMusicOnInteraction);
});

// Add keyboard shortcuts for fun effects
document.addEventListener('keydown', function(e) {
    switch(e.key) {
        case ' ': // Spacebar
            e.preventDefault();
            // Trigger confetti burst
            triggerConfettiBurst();
            break;
        case 'Enter':
            // Make everything bigger temporarily
            document.body.style.transform = 'scale(1.05)';
            setTimeout(() => {
                document.body.style.transform = 'scale(1)';
            }, 200);
            break;
        case 'h':
        case 'H':
            // Create heart rain
            for(let i = 0; i < 20; i++) {
                setTimeout(() => createFloatingHeart(), i * 100);
            }
            break;
    }
});

function triggerConfettiBurst() {
    const confettiContainer = document.querySelector('.confetti');
    // Clear existing confetti
    confettiContainer.innerHTML = '';
    
    // Create new confetti pieces
    for(let i = 0; i < 50; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.style.left = Math.random() * 100 + '%';
        piece.style.backgroundColor = getRandomColor();
        piece.style.animationDelay = Math.random() * 2 + 's';
        confettiContainer.appendChild(piece);
    }
    
    // Reset after burst
    setTimeout(() => {
        confettiContainer.innerHTML = `
            <div class="confetti-piece"></div>
            <div class="confetti-piece"></div>
            <div class="confetti-piece"></div>
            <div class="confetti-piece"></div>
            <div class="confetti-piece"></div>
            <div class="confetti-piece"></div>
            <div class="confetti-piece"></div>
            <div class="confetti-piece"></div>
            <div class="confetti-piece"></div>
            <div class="confetti-piece"></div>
        `;
    }, 3000);
}

function getRandomColor() {
    const pinkColors = ['#ff1493', '#ff69b4', '#ffb6c1', '#ffc0cb', '#ffc2cd', '#ff6b9d'];
    return pinkColors[Math.floor(Math.random() * pinkColors.length)];
}