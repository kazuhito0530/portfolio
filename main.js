
const isMobile = !!new MobileDetect(window.navigator.userAgent).mobile();

/**
 * animatedクラスを持つ要素が画面内に入ったら
 * Animate.cssのfadeInUpエフェクトを適用
 */
$('.animated').waypoint({
  handler(direction) {
    if (direction === 'down') {
      $(this.element).addClass('fadeInUp');
      $(this.element).removeClass('fadeOutUp');
    }else if(direction === 'up') {
      $(this.element).addClass('fadeOutUp');
      $(this.element).removeClass('fadeInUp');
    }
  },
  /**
   * 要素の上端が画面のどの位置に来たときにhandlerメソッドを呼び出すか指定
   * 0%なら画面の一番上、100%なら画面の一番下に来たときに呼び出される
   */
  offset: '50%',
});
