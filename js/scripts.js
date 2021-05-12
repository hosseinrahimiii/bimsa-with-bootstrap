//open & close drawer
$('#openDrawer').on('click', function () {
  var drawer = $('#drawer');
  drawer.css('right', '0');
});
$('#closeDrawer').on('click', function () {
  var drawer = $('#drawer');
  drawer.css('right', '-30rem');
});


//cooperators ring
var model = 0;
var position0 = "scale(.8) translate(20%, 62%)";
var position1 = "scale(1) translate(290%, 65%)";
var position2 = "scale(1.3) translate(460%, 130%)";
var position3 = "scale(1.6) translate(300%, 240%)";
var position4 = "scale(2.4) translate(8%, 190%)";
var position5 = "scale(1.6) translate(-300%, 240%)";
var position6 = "scale(1.3) translate(-460%, 130%)";
var position7 = "scale(1) translate(-290%, 65%)";

/*var s_model = 1;
var s_position1 = "translate(4.5rem, 1.6rem)";
var s_position2 = "translate(10rem, 6.2rem)";
var s_position3 = "translate(0rem, 6rem)";*/

$(document).ready(function () {
  $(".cycle__btn--left").click(function (event) {
    event.preventDefault();
    model += 1;
    if (model == 8) {
      model = 0;
    }
    if (model == 1) {
      $(".cycle__item--1").css({
        transform: position1,
      });
      $(".cycle__item--2").css({
        transform: position2,
      });
      $(".cycle__item--3").css({
        transform: position3,
      });
      $(".cycle__item--4").css({
        transform: position4,
      });
      $(".cycle__item--5").css({
        transform: position5,
      });
      $(".cycle__item--6").css({
        transform: position6,
      });
      $(".cycle__item--7").css({
        transform: position7,
      });
      $(".cycle__item--8").css({
        transform: position0,
      });

      $(".caption__text").text(bime_dey);
    }

    if (model == 2) {
      $(".cycle__item--1").css({
        transform: position2,
      });
      $(".cycle__item--2").css({
        transform: position3,
      });
      $(".cycle__item--3").css({
        transform: position4,
      });
      $(".cycle__item--4").css({
        transform: position5,
      });
      $(".cycle__item--5").css({
        transform: position6,
      });
      $(".cycle__item--6").css({
        transform: position7,
      });
      $(".cycle__item--7").css({
        transform: position0,
      });
      $(".cycle__item--8").css({
        transform: position1,
      });

      $(".caption__text").text(bime_asia);
    }

    if (model == 3) {
      $(".cycle__item--1").css({
        transform: position3,
      });
      $(".cycle__item--2").css({
        transform: position4,
      });
      $(".cycle__item--3").css({
        transform: position5,
      });
      $(".cycle__item--4").css({
        transform: position6,
      });
      $(".cycle__item--5").css({
        transform: position7,
      });
      $(".cycle__item--6").css({
        transform: position0,
      });
      $(".cycle__item--7").css({
        transform: position1,
      });
      $(".cycle__item--8").css({
        transform: position2,
      });

      $(".caption__text").text(bime_novin);
    }

    if (model == 4) {
      $(".cycle__item--1").css({
        transform: position4,
      });
      $(".cycle__item--2").css({
        transform: position5,
      });
      $(".cycle__item--3").css({
        transform: position6,
      });
      $(".cycle__item--4").css({
        transform: position7,
      });
      $(".cycle__item--5").css({
        transform: position0,
      });
      $(".cycle__item--6").css({
        transform: position1,
      });
      $(".cycle__item--7").css({
        transform: position2,
      });
      $(".cycle__item--8").css({
        transform: position3,
      });

      $(".caption__text").text(bime_pasargad);
    }

    if (model == 5) {
      $(".cycle__item--1").css({
        transform: position5,
      });
      $(".cycle__item--2").css({
        transform: position6,
      });
      $(".cycle__item--3").css({
        transform: position7,
      });
      $(".cycle__item--4").css({
        transform: position0,
      });
      $(".cycle__item--5").css({
        transform: position1,
      });
      $(".cycle__item--6").css({
        transform: position2,
      });
      $(".cycle__item--7").css({
        transform: position3,
      });
      $(".cycle__item--8").css({
        transform: position4,
      });

      $(".caption__text").text(bime_alborz);
    }

    if (model == 6) {
      $(".cycle__item--1").css({
        transform: position6,
      });
      $(".cycle__item--2").css({
        transform: position7,
      });
      $(".cycle__item--3").css({
        transform: position0,
      });
      $(".cycle__item--4").css({
        transform: position1,
      });
      $(".cycle__item--5").css({
        transform: position2,
      });
      $(".cycle__item--6").css({
        transform: position3,
      });
      $(".cycle__item--7").css({
        transform: position4,
      });
      $(".cycle__item--8").css({
        transform: position5,
      });

      $(".caption__text").text(bime_iran);
    }

    if (model == 7) {
      $(".cycle__item--1").css({
        transform: position7,
      });
      $(".cycle__item--2").css({
        transform: position0,
      });
      $(".cycle__item--3").css({
        transform: position1,
      });
      $(".cycle__item--4").css({
        transform: position2,
      });
      $(".cycle__item--5").css({
        transform: position3,
      });
      $(".cycle__item--6").css({
        transform: position4,
      });
      $(".cycle__item--7").css({
        transform: position5,
      });
      $(".cycle__item--8").css({
        transform: position6,
      });

      $(".caption__text").text(bime_razi);
    }

    if (model == 0) {
      $(".cycle__item--1").css({
        transform: position0,
      });
      $(".cycle__item--2").css({
        transform: position1,
      });
      $(".cycle__item--3").css({
        transform: position2,
      });
      $(".cycle__item--4").css({
        transform: position3,
      });
      $(".cycle__item--5").css({
        transform: position4,
      });
      $(".cycle__item--6").css({
        transform: position5,
      });
      $(".cycle__item--7").css({
        transform: position6,
      });
      $(".cycle__item--8").css({
        transform: position7,
      });

      $(".caption__text").text(bime_melat);
    }

    /*s_model += 1;
    if (s_model == 4) {
      s_model = 1;
    }
    if (s_model == 2) {
      $(".dot--1").css({
        transform: s_position2,
      });
      $(".dot--2").css({
        transform: s_position3,
      });
      $(".dot--3").css({
        transform: s_position1,
      });
    }
    if (s_model == 3) {
      $(".dot--1").css({
        transform: s_position3,
      });
      $(".dot--2").css({
        transform: s_position1,
      });
      $(".dot--3").css({
        transform: s_position2,
      });
    }
    if (s_model == 1) {
      $(".dot--1").css({
        transform: s_position1,
      });
      $(".dot--2").css({
        transform: s_position2,
      });
      $(".dot--3").css({
        transform: s_position3,
      });
    }*/
  });
});

$(document).ready(function () {
  $(".cycle__btn--right").click(function (event) {
    event.preventDefault();
    model -= 1;
    if (model == -1) {
      model = 7;
    }
    if (model == 1) {
      $(".cycle__item--1").css({
        transform: position1,
      });
      $(".cycle__item--2").css({
        transform: position2,
      });
      $(".cycle__item--3").css({
        transform: position3,
      });
      $(".cycle__item--4").css({
        transform: position4,
      });
      $(".cycle__item--5").css({
        transform: position5,
      });
      $(".cycle__item--6").css({
        transform: position6,
      });
      $(".cycle__item--7").css({
        transform: position7,
      });
      $(".cycle__item--8").css({
        transform: position0,
      });

      $(".caption__text").text(bime_dey);
    }

    if (model == 2) {
      $(".cycle__item--1").css({
        transform: position2,
      });
      $(".cycle__item--2").css({
        transform: position3,
      });
      $(".cycle__item--3").css({
        transform: position4,
      });
      $(".cycle__item--4").css({
        transform: position5,
      });
      $(".cycle__item--5").css({
        transform: position6,
      });
      $(".cycle__item--6").css({
        transform: position7,
      });
      $(".cycle__item--7").css({
        transform: position0,
      });
      $(".cycle__item--8").css({
        transform: position1,
      });

      $(".caption__text").text(bime_asia);
    }

    if (model == 3) {
      $(".cycle__item--1").css({
        transform: position3,
      });
      $(".cycle__item--2").css({
        transform: position4,
      });
      $(".cycle__item--3").css({
        transform: position5,
      });
      $(".cycle__item--4").css({
        transform: position6,
      });
      $(".cycle__item--5").css({
        transform: position7,
      });
      $(".cycle__item--6").css({
        transform: position0,
      });
      $(".cycle__item--7").css({
        transform: position1,
      });
      $(".cycle__item--8").css({
        transform: position2,
      });

      $(".caption__text").text(bime_novin);
    }

    if (model == 4) {
      $(".cycle__item--1").css({
        transform: position4,
      });
      $(".cycle__item--2").css({
        transform: position5,
      });
      $(".cycle__item--3").css({
        transform: position6,
      });
      $(".cycle__item--4").css({
        transform: position7,
      });
      $(".cycle__item--5").css({
        transform: position0,
      });
      $(".cycle__item--6").css({
        transform: position1,
      });
      $(".cycle__item--7").css({
        transform: position2,
      });
      $(".cycle__item--8").css({
        transform: position3,
      });

      $(".caption__text").text(bime_pasargad);
    }

    if (model == 5) {
      $(".cycle__item--1").css({
        transform: position5,
      });
      $(".cycle__item--2").css({
        transform: position6,
      });
      $(".cycle__item--3").css({
        transform: position7,
      });
      $(".cycle__item--4").css({
        transform: position0,
      });
      $(".cycle__item--5").css({
        transform: position1,
      });
      $(".cycle__item--6").css({
        transform: position2,
      });
      $(".cycle__item--7").css({
        transform: position3,
      });
      $(".cycle__item--8").css({
        transform: position4,
      });

      $(".caption__text").text(bime_alborz);
    }

    if (model == 6) {
      $(".cycle__item--1").css({
        transform: position6,
      });
      $(".cycle__item--2").css({
        transform: position7,
      });
      $(".cycle__item--3").css({
        transform: position0,
      });
      $(".cycle__item--4").css({
        transform: position1,
      });
      $(".cycle__item--5").css({
        transform: position2,
      });
      $(".cycle__item--6").css({
        transform: position3,
      });
      $(".cycle__item--7").css({
        transform: position4,
      });
      $(".cycle__item--8").css({
        transform: position5,
      });

      $(".caption__text").text(bime_iran);
    }

    if (model == 7) {
      $(".cycle__item--1").css({
        transform: position7,
      });
      $(".cycle__item--2").css({
        transform: position0,
      });
      $(".cycle__item--3").css({
        transform: position1,
      });
      $(".cycle__item--4").css({
        transform: position2,
      });
      $(".cycle__item--5").css({
        transform: position3,
      });
      $(".cycle__item--6").css({
        transform: position4,
      });
      $(".cycle__item--7").css({
        transform: position5,
      });
      $(".cycle__item--8").css({
        transform: position6,
      });

      $(".caption__text").text(bime_razi);
    }

    if (model == 0) {
      $(".cycle__item--1").css({
        transform: position0,
      });
      $(".cycle__item--2").css({
        transform: position1,
      });
      $(".cycle__item--3").css({
        transform: position2,
      });
      $(".cycle__item--4").css({
        transform: position3,
      });
      $(".cycle__item--5").css({
        transform: position4,
      });
      $(".cycle__item--6").css({
        transform: position5,
      });
      $(".cycle__item--7").css({
        transform: position6,
      });
      $(".cycle__item--8").css({
        transform: position7,
      });

      $(".caption__text").text(bime_melat);
    }

    /*s_model -= 1;
    if (s_model == 0) {
      s_model = 3;
    }
    if (s_model == 3) {
      $(".dot--1").css({
        transform: s_position3,
      });
      $(".dot--2").css({
        transform: s_position1,
      });
      $(".dot--3").css({
        transform: s_position2,
      });
    }
    if (s_model == 2) {
      $(".dot--1").css({
        transform: s_position2,
      });
      $(".dot--2").css({
        transform: s_position3,
      });
      $(".dot--3").css({
        transform: s_position1,
      });
    }
    if (s_model == 1) {
      $(".dot--1").css({
        transform: s_position1,
      });
      $(".dot--2").css({
        transform: s_position2,
      });
      $(".dot--3").css({
        transform: s_position3,
      });
    }*/
  });
});

var bime_melat =
  "بیمه ملت در زمینه فروش تمام محصولات بیمه‌ای فعالیت کرده و با داشتن 8 شعبه و حدود 2000 نمایندگی فعال، خدمات متنوعی ارائه می‌دهد. توانگری مالی بیمه ملت در رتبه یک قرار دارد. در نتیجه این شرکت توانایی مطلوبی در پرداخت خسارات مورد تعهد داراست. همچنین بر اساس آخرین گزارش منتشر شده، رضایت مشتریان از بیمه ملت رتبه 10 را کسب کرده و 1.6% فروش کل صنعت بیمه متعلق به این شرکت است";
var bime_dey =
  "شرکت بیمه دی (سهامی عام) در سال 1383 با اخذ مجوز رسمی از بیمه مرکزی ایران و شورای عالی بیمف به ثبت رسید. این شرکت با بهره‌مندی از کارشناسان متخصص و متبحر صنعت بیمه و همچنین گسترش شبکه فروش خود در تمامی نقاط کشور به طور مستمر سعی مطلوب به بیمه‌گذاران خود را نموده است.ه، با شماره ثبت 241511 در اداره ثبت شرکت‌های تهران به منظور ارایه خدمات بیمه‌ای در رشته‌های مختل";
var bime_asia =
  "بيـمه آسـيا به عنـوان يكي از معتبرترين شركت هاي بيمه با انجام عمليات بيـمه اي در زمينه هاي زندگي ، غير زندگي و اتكایي همواره بر آن است تا با بكارگيري روش هاي نوين ارائه خدمات و با اتكا بر سرمايه انساني متخصص در جهت تامين رضايت كليه ذينفعان تلاش كرده و با بهبود مستمر تركيب سبد خدمات حضوري موثر در بازارهاي داخلي و خارجي داشته باشد .";
var bime_novin =
  "شركت بيمه نوين به عنوان هجدهمين شركت بيمه در كشور جمهوری اسلامی ايران در تاريخ ۱۳۸۴/۱۰/۲۰ تحت شماره ۲۶۳۴۶۱ در اداره ثبت شركت‌های تهران به ثبت رسيده و پس از اخذ مجوز فعاليت از بيمه مركزی جمهوری اسلامی ايران (به شماره ۳۰۸۸۱ مورخ ۱۳۸۴/۱۲/۱۴) فعاليت خود را آغاز نموده است.";
var bime_pasargad =
  "شرکت بیمه پاسارگاد به منظور عرضه خدمات بیمه‌های در زمینه بیمه‌های زندگی و غیرزندگی (به طور مستقیم و قبولی اتکائی) و کسب سود متوازن و همسو با مصالح و منافع ملی توسط گروه مـالی پاسـارگاد تأسیس گردیده است.";
var bime_alborz =
  "سامانه خدمات اينترنتي بيمه البرز به منظور ارائه سرويس هاي اينترنتي براي مشتريان راه اندازي شده است. در حال حاضر استعلام نرخ بیمه نامه های بدنه ، شخص ثالث ، مسافران خارج از کشور ، فوت تمام عمر ، مستمری و عمر و سرمایه گذاری و استعلام خسارت پرداخت شده در رشته های بدنه ، شخص ثالث و درمان و همین طور صدور معرفی نامه درمان و پرداخت اقساط بیمه و وام عمر و تشکیل سرمایه را شامل می شود";
var bime_razi =
  "شرکت بیمه رازی بر اساس قانون تأسیس مؤسسات بیمه غیر دولتی مصوب ششم شهریور ۱۳۸۰ مجلس شورای اسلامی و مجوز شماره ۵۱۹۴ مورخ ۲۸/۰۲/۱۳۸۲بیمه مرکزی جمهوری اسلامی ایران، با هدف توسعه فرهنگ بیمه، ارتقاء کیفیت خدمات بیمه‌ای و گسترش فضای رقابتی در صنعت بیمه فعالیت خود را به عنوان اولین شرکت بیمه خصوصی در ایران، از اوایل سال ۱۳۸۲ با سرمایه ۱۴۰،۰۰۰ میلیون ریال آغاز نمود";
var bime_iran =
  "پانزدهم آبان‌ماه تاریخی است به یادماندنی درصنعت بیمه کشور . در سال 1314 ، در چنین‌روزی، شرکت سهامی بیمه ایران به عنوان نخستین شرکت بیمه ایرانی و دولتی تأسیس شد و به عنوان بنیانگذار صنعت بیمه در کشور آغاز به کارکرد. آغاز فعالیت بیمه ایران (14 آبان 1314) را به تعبیری می توان ملی شدن صنعت بیمه تلقی کرد.";