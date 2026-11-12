(function(){
  var root = document.documentElement;
  var btn = document.getElementById('themeToggle');
  var stored = localStorage.getItem('theme');
  if (stored) root.setAttribute('data-theme', stored);
  if (btn) {
    btn.addEventListener('click', function(){
      var current = root.getAttribute('data-theme') ||
        (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      var next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  }
})();

(function(){
  var canvas = document.getElementById('hexScan');
  if (!canvas || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var ctx = canvas.getContext('2d');
  var hero = canvas.parentElement;
  var cols = [];
  var charset = '0123456789ABCDEF';

  function resize(){
    canvas.width = hero.clientWidth;
    canvas.height = hero.clientHeight;
    var colWidth = 22;
    var count = Math.ceil(canvas.width / colWidth) + 2;
    cols = [];
    for (var i = 0; i < count; i++){
      cols.push({
        x: i * colWidth,
        y: Math.random() * canvas.height,
        speed: 0.15 + Math.random() * 0.35,
        chars: Math.ceil(canvas.height / 18) + 4
      });
    }
  }
  window.addEventListener('resize', resize);
  resize();

  function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '12px ui-monospace, Consolas, monospace';
    cols.forEach(function(col){
      col.y += col.speed;
      if (col.y > canvas.height + col.chars * 18) col.y = -col.chars * 18;
      for (var j = 0; j < col.chars; j++){
        var yy = col.y - j * 18;
        if (yy < -18 || yy > canvas.height + 18) continue;
        var fade = 1 - j / col.chars;
        ctx.fillStyle = 'rgba(79, 230, 195,' + (0.16 * fade).toFixed(3) + ')';
        var ch = charset[Math.floor(Math.random() * charset.length)];
        ctx.fillText(ch, col.x, yy);
      }
    });
    requestAnimationFrame(draw);
  }
  draw();
})();
