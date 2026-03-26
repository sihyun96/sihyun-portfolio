$('.book-card').each(function() {
    const $card = $(this);
    const $front = $card.find('.front');
    let isDragging = false;
    let startX = 0;
    
    // --- [추가] 이미 열려있는 카드를 클릭하면 다시 닫기 ---
    $card.on('click', function() {
        if ($card.hasClass('is-flipped')) {
            $card.removeClass('is-flipped');
            $front.css({
                'transform': 'rotateY(0deg) rotateZ(0deg) translateY(0px) skewX(0deg)',
                'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                'opacity': '1'
            });
        }
    });

    $card.on('mousedown touchstart', function(e) {
        if ($card.hasClass('is-flipped')) return; // 이미 열렸으면 드래그 무시
        isDragging = true;
        const event = (e.type === 'mousedown') ? e : e.originalEvent.touches[0];
        startX = event.pageX;
        $front.css('transition', 'none'); 
    });

    $(window).on('mousemove touchmove', function(e) {
        if (!isDragging) return;
        const event = (e.type === 'mousemove') ? e : e.originalEvent.touches[0];
        let diffX = event.pageX - startX;
        
        if (diffX < 0) { // 왼쪽으로 드래그
            let movePercent = Math.min(Math.abs(diffX) / $card.width(), 1);
            
            // 자연스러운 종이 들림 계산
            let rotateY = movePercent * -140; 
            let rotateZ = movePercent * 30;  
            let translateY = movePercent * -80;
            
            // 종이가 깎여나가는 듯한 클립패스 애니메이션
            let clipX = 100 - (movePercent * 120); 
            let clipY = 100 - (movePercent * 60);

            $front.css({
                'transform': `rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) translateY(${translateY}px)`,
                'clip-path': `polygon(0% 0%, 100% 0%, ${clipX + 20}% ${clipY + 20}%, 0% 100%)`,
                'opacity': 1 - (movePercent * 0.5)
            });
        }
    });

    $(window).on('mouseup touchend', function() {
        if (!isDragging) return;
        isDragging = false;
        
        $front.css('transition', 'all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)');

        // 절반 이상(약 100px) 드래그했으면 날려버리기
        const currentTransform = $front.css('transform');
        if (currentTransform !== 'none') {
            const matrix = new WebKitCSSMatrix(currentTransform);
            if (matrix.m11 < 0.5) { // 회전값이 일정 수준 이상일 때
                $card.addClass('is-flipped');
                $front.css({
                    'transform': 'rotateY(-150deg) rotateZ(40deg) translateY(-150px)',
                    'clip-path': 'polygon(0% 0%, 20% 0%, 0% 20%, 0% 0%)',
                    'opacity': '0'
                });
            } else {
                // 원상 복구
                $front.css({
                    'transform': 'rotateY(0deg) rotateZ(0deg) translateY(0px)',
                    'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                    'opacity': '1'
                });
            }
        }
    });
});