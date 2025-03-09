document.addEventListener("DOMContentLoaded", function() {
    const wrapper = document.querySelector('.wrapper');
    const letter = document.getElementById('letter');
    const envelope = document.getElementById('envelope');
    
    // When the user clicks on the envelope wrapper:
    wrapper.addEventListener('click', function() {
      // Trigger envelope opening (lid animations)
      wrapper.classList.add('open');
      
      // After a short delay, zoom in the letter and hide the envelope
      setTimeout(function() {
        letter.classList.add('fullscreen');
        envelope.classList.add('hide');
      }, 1000); // Delay in milliseconds (adjust to sync with your lid animation)
    });
  });
  