// 移动端导航菜单修复脚本
// 放在 assets/js/ 目录下

$(document).ready(function() {
  // 修复汉堡包菜单点击事件
  $('.navbar-toggler, .btn-navbar, .menu-icon').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    var target = $(this).data('target') || $(this).attr('href') || '.navbar-collapse';
    var $target = $(target);
    
    if ($target.length) {
      $target.toggleClass('show');
      $(this).toggleClass('collapsed');
      
      // 更新aria属性
      var expanded = $target.hasClass('show');
      $(this).attr('aria-expanded', expanded);
    }
  });
  
  // 点击导航链接后关闭菜单（移动端）
  $('.navbar-nav .nav-link').on('click', function() {
    if (window.innerWidth < 768) {
      $('.navbar-collapse').removeClass('show');
      $('.navbar-toggler').addClass('collapsed').attr('aria-expanded', 'false');
    }
  });
  
  // 点击外部区域关闭菜单
  $(document).on('click', function(e) {
    if (!$(e.target).closest('.navbar').length) {
      $('.navbar-collapse').removeClass('show');
      $('.navbar-toggler').addClass('collapsed').attr('aria-expanded', 'false');
    }
  });
  
  // 修复触摸事件（iOS Safari特有问题）
  if ('ontouchstart' in document.documentElement) {
    $('.navbar-toggler, .btn-navbar, .menu-icon').on('touchstart', function(e) {
      // 强制触发点击事件
      $(this).trigger('click');
    });
  }
});
