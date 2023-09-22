const $text = document.getElementById('word');
 $('.kuzi-wrap').hide();
 $('.ugoku').hide();
 $('.text-wrap').hide();
 $('.nameP').fadeIn(700);

 function kuzi(){
   const cnt = Math.ceil(Math.random()*6);
   $('.kuzi-wrap').show();

   if(cnt == 1){
     $text.innerHTML = "貴方には<span>「僕のヒーローアカデミア」</span>がオススメね！";
     $("#cover").children('img').attr('src','images/hero.jpg');
     $(".book-title").text("僕のヒーローアカデミア【31】");
     $(".book-story").text("死柄木を逃した上、被害は甚大である。でも…それでも我々ヒーローは、一糸の綻びさえもない信念を以て、戦い続けなくてはならない！　それが散っていった仲間の想いであり、次代へと紡がれていくのだから…。“Plus Ultra”!!");
    }
   if(cnt == 2){
     $text.innerHTML = "貴方には<span>「呪術廻戦」</span>がオススメね！";
     $("#cover").children('img').attr('src','images/zyu.jpg');
     $(".book-title").text("呪術廻戦【16】");
     $(".book-story").text("真人を手中に収め、自らの計画の一端を語り出す夏油。渋谷事変の最終局面に呪術師達が集うなかで、脹相は夏油の亡骸に寄生する“黒幕”の正体に気付くが!?　事変の終焉が招く破滅と混沌、世界は急変する――…!!");
    }
   if(cnt == 3){
     $text.innerHTML = "貴方には<span>「Dr.STONE」</span>がオススメね！";
     $("#cover").children('img').attr('src','images/stone.jpg');
     $(".book-title").text("Dr.STONE【22】");
     $(".book-story").text("追跡者スタンリーとの最終決戦!!　石化装置（メデューサ）起動に一縷の望みを懸け、決死の抗戦を試みる科学王国だが…!?　傷つき、倒れゆく仲間たち。最後の刻が迫る中、少年たちが命運を託すのは――あの忌まわしき光!!");
    }
   if(cnt == 4){
      $text.innerHTML = "貴方には<span>「アンデッドアンラック」</span>がオススメね！";
      $("#cover").children('img').attr('src','images/undera.jpg');
      $(".book-title").text("アンデッドアンラック【7】");
      $(".book-story").text("激闘の末、オータムの捕獲に成功したアンディと風子。報告を受けたジュイスはビリー説得に赴く。だが互いに譲れぬ想いを抱えた二人に、剣を交える以外答えはなく…。一方シェンの前に現れたファンの正体が明らかに!?");
     }
   if(cnt == 5){
      $text.innerHTML = "貴方には<span>「破壊神マグちゃん」</span>がオススメね！私もいるし";
      $("#cover").children('img').attr('src','images/magu.jpg');
      $(".book-title").text("破壊神マグちゃん【5】");
      $(".book-story").text("新学期を迎え三年生になった流々たち。クラスにはなぜか学生服姿のマグちゃんとウーネラスも…!?　別の日には、荷物検査でマグちゃんが先生に見つかってしまい!?　混沌と波乱の新学期編がゆるっとスタート!!");
      }
   if(cnt == 6){
      $text.innerHTML = "貴方には<span>「ONE PIECE」</span>がオススメね！";
      $("#cover").children('img').attr('src','images/one.jpg');
      $(".book-title").text("ONE PIECE【100】");
      $(".book-story").text("主役級が勢揃いした屋上で、カイドウ＆マムに挑むルフィ達。最強同盟に対し、勝つ術はあるのだろうか!?　真っ向勝負の極限バトルに待つ未来とは!?　鬼ヶ島に超激震!!　「ひとつなぎの大秘宝」を巡る海洋冒険ロマン!!");
     }

 $("#kuzi-btn").text("もう一度引く！");
  }


$("#kuzi-btn").on("click",function (){
   $('.all-kuzi').hide();
   $('.ugoku').show();
   $('.text-wrap').fadeIn();
   setTimeout(function(){
     $('.ugoku').fadeOut();
     $('#kuzi-img').hide();
     $('.text-wrap').hide();
     $('.all-kuzi').fadeIn();
     kuzi();
   },2700);
    });
