$(document).ready(function(){
    $(window).scroll(function(){

        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
     
        $('html').css("scrollBehavior", "smooth");
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    var typed = new Typed(".typing", {
        strings: ["Chào Mừng Bạn Đến Với Website Của Tôi !", "Đây chỉ là một dự án mà tôi source lại trên mạng", "Bạn muốn gì khi đang ở đây :)?"],
        typeSpeed: 45,
        backSpeed: 10,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: [" Phong", " Wind+"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-3", {
        strings: ["Xem  Phim", "Ngủ:>", "Nghịch Code Nhưng Trình Chỉ Ở Coppy Paste :>", "Bạn:)?"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-4", {
        strings: ["HTML là viết tắt của Hypertext Markup Language, trong tiếng Việt được gọi là ngôn ngữ đánh dấu siêu văn bản. Đây là một ngôn ngữ đánh dấu sử dụng để xây dựng và cấu trúc nội dung trên các trang web. HTML sử dụng các thẻ (tag) để đánh dấu và xác định các phần tử trên trang web, bao gồm các đoạn văn bản, hình ảnh, liên kết, bảng, form và nhiều phần tử khác. Ngôn ngữ này là cơ sở để xây dựng các trang web và cùng với CSS (Cascading Style Sheets) và JavaScript, HTML giúp tạo ra các trang web đẹp mắt, tương tác và linh hoạt", "CSS là viết tắt của Cascading Style Sheets, trong tiếng Việt được gọi là bảng kiểu tương tự. CSS là một ngôn ngữ để mô tả cách hiển thị và trình bày các phần tử được đánh dấu bằng HTML trên trang web. CSS giúp điều chỉnh màu sắc, kích thước, khoảng cách, vị trí và các thuộc tính khác của các phần tử HTML. Bằng cách tách riêng phần nội dung và phần kiểu dáng của trang web, CSS cho phép người phát triển tạo ra các trang web đẹp mắt, linh hoạt và dễ bảo trì. CSS có thể được áp dụng thông qua các tệp tin external CSS hoặc inline CSS trong mã HTML.", "Java là một ngôn ngữ lập trình được tạo ra bởi Sun Microsystems (hiện nay là Oracle Corporation). Nó được phát hành lần đầu vào năm 1995 và đã trở thành một trong những ngôn ngữ lập trình phổ biến nhất trên thế giới. Java được thiết kế để có thể chạy trên nhiều nền tảng khác nhau mà không cần biên dịch lại mã nguồn. Java được sử dụng rộng rãi cho việc phát triển ứng dụng web, ứng dụng di động, phần mềm máy tính và hệ thống phân tán. Nó được đánh giá cao với tính bảo mật cao, độ tin cậy và khả năng mở rộng. Một trong những đặc điểm quan trọng của Java là việc sử dụng mô hình write once, run anywhere, có nghĩa là mã nguồn Java có thể chạy trên bất kỳ nền tảng nào có máy ảo Java (Java Virtual Machine - JVM) được cài đặt.", "JavaScript là một ngôn ngữ lập trình phía client được sử dụng phổ biến trong việc phát triển ứng dụng web. JavaScript cho phép bạn làm cho trang web của mình trở nên tương tác và động, bằng cách thêm các chức năng động vào trang web, xử lý sự kiện, thay đổi nội dung và tương tác với người dùng. JavaScript có thể được nhúng trực tiếp vào mã HTML của trang web, hoặc được viết trong các tệp tin ngoài và được liên kết với trang web. Nó được hỗ trợ trên hầu hết các trình duyệt web hiện đại và có thể chạy trên nhiều nền tảng khác nhau. JavaScript không chỉ được sử dụng trong phát triển web, mà còn được sử dụng trong các lĩnh vực khác như phát triển ứng dụng di động, máy chủ và game. Nó cung cấp cho người phát triển các công cụ và thư viện mạnh mẽ để xây dựng các ứng dụng đa dạng và phức tạp.", "Python là một ngôn ngữ lập trình thông dịch, được tạo ra bởi Guido van Rossum vào những năm 1980 và được phát hành lần đầu vào năm 1991. Python nổi tiếng với cú pháp đơn giản và dễ đọc, cung cấp một môi trường lập trình dễ dùng cho cả người mới bắt đầu và những lập trình viên kinh nghiệm. Python hiện nay là một trong những ngôn ngữ lập trình phổ biến nhất trên thế giới. Nó được sử dụng rộng rãi trong nhiều lĩnh vực bao gồm phát triển web, khoa học dữ liệu, trí tuệ nhân tạo, mạng máy tính và nhiều ứng dụng khác. Python có cộng đồng mạnh mẽ và thư viện phong phú, cung cấp nhiều công cụ và tài liệu hỗ trợ cho việc phát triển và xây dựng các ứng dụng. Python cung cấp tính linh hoạt cao, cho phép bạn viết mã ngắn, đơn giản và hiệu quả.", "PHP là ngôn ngữ lập trình phía máy chủ (server-side scripting language) được sử dụng chủ yếu để phát triển các trang web động (dynamic web pages). PHP ban đầu được tạo ra vào những năm 1990 và đã trở thành một trong những ngôn ngữ lập trình phía máy chủ phổ biến nhất trên thế giới. PHP hoạt động trên máy chủ web và được dùng để xử lý và tạo nội dung động trước khi gửi tới trình duyệt người dùng. Với PHP, bạn có thể thực hiện các tác vụ như tạo và quản lý cơ sở dữ liệu, xử lý biểu mẫu, tạo hình ảnh động, tạo các trang web động, và nhiều tính năng khác. Một trong những điểm mạnh của PHP là nó hỗ trợ rất nhiều cơ sở dữ liệu phổ biến như MySQL, PostgreSQL, SQLite và nhiều hơn nữa. PHP cũng có thư viện mã nguồn mở rất phong phú và một cộng đồng lập trình viên PHP đông đảo, điều này giúp cho việc phát triển web bằng PHP trở nên dễ dàng và mạnh mẽ. PHP thường được sử dụng trong các dự án phát triển web như hệ thống quản lý nội dung (CMS), cửa hàng trực tuyến (e-commerce), ứng dụng web dựa trên dữ liệu, và nhiều ứng dụng web khác."],
        typeSpeed: 17,
        backSpeed: 0.1,
        loop: true
    });

    // var typed = new Typed(".typing-5", {
    //     strings: ["React là một thư viện JavaScript mã nguồn mở được sử dụng phổ biến để xây dựng giao diện người dùng động và tương tác trong các ứng dụng web. Nó được phát triển bởi Facebook và được ra mắt lần đầu vào năm 2013. React sử dụng mô hình công thức (component-based model) để xây dựng giao diện người dùng. Bạn có thể tách giao diện thành các thành phần (components) nhỏ hơn và tái sử dụng chúng trong các phần khác nhau của ứng dụng. Mỗi thành phần có chứa mã HTML, CSS và JavaScript riêng của nó, giúp quản lý tốt hơn và dễ dàng thay đổi giao diện. React sử dụng một khái niệm gọi là Virtual DOM để quản lý và theo dõi các thay đổi trong giao diện. Khi có sự thay đổi, React cập nhật chỉ những phần cần thiết của giao diện thay vì cập nhật toàn bộ. Điều này giúp cải thiện hiệu suất và tăng tốc độ của ứng dụng. React cũng kết hợp được với các thư viện, framework và công nghệ khác, tạo cơ sở cho việc phát triển ứng dụng phức tạp và ứng dụng di động sử dụng React Native.", "C là một ngôn ngữ lập trình mạnh và phổ biến được phát triển như một phiên bản nâng cấp của ngôn ngữ lập trình B. Dennis Ritchie là người phát triển C vào những năm 1970 tại Bell Labs. C là một ngôn ngữ lập trình cấu trúc, tức là chương trình sẽ được viết dưới dạng các khối lệnh khác nhau và tuần tự được thực thi. Ngôn ngữ C cung cấp cú pháp đơn giản và rõ ràng, cho phép lập trình viên có kiểm soát chặt chẽ với bộ nhớ và tài nguyên hệ thống. C được sử dụng rộng rãi trong việc phát triển phần mềm hệ thống, phần mềm nhúng, ứng dụng di động, trò chơi và hơn thế nữa. Nó là một trong những ngôn ngữ lập trình phổ biến nhất trên thế giới và có sự hỗ trợ mạnh mẽ từ cộng đồng lập trình C.", "C++ (C plus plus) là một ngôn ngữ lập trình mạnh mẽ và phổ biến được xây dựng dựa trên ngôn ngữ C. Nó được phát triển vào những năm 1980 bởi Bjarne Stroustrup. C++ giữ được các đặc điểm cấu trúc và cú pháp của C, nhưng cũng bổ sung thêm nhiều tính năng mạnh mẽ khác. Đặc biệt, C++ hỗ trợ lập trình hướng đối tượng, cho phép tạo ra các đối tượng chứa thuộc tính (dữ liệu) và phương thức (code) liên quan đến chúng. Ngoài ra, C++ cũng có khả năng hỗ trợ lập trình hướng sự kiện, quản lý bộ nhớ tự động và nhiều tính năng khác. Tuy nhiên, do các tính năng phong phú này, C++ có thể đòi hỏi một số lượng bộ nhớ và tài nguyên tính toán lớn hơn so với một số ngôn ngữ khác. Điều này có thể dẫn đến hiệu suất chậm hơn nếu không được viết và tối ưu hóa đúng cách. Tóm lại, C++ là một ngôn ngữ lập trình mạnh mẽ và phổ biến, được sử dụng rộng rãi trong các lĩnh vực như phát triển phần mềm hệ thống, trò chơi, ứng dụng máy tính, và nhiều lĩnh vực khác.", "C# (pronounced as C sharp) là một ngôn ngữ lập trình đa nền tảng (cross-platform) và hướng đối tượng được phát triển bởi Microsoft. C# được thiết kế để xây dựng các ứng dụng phần mềm chạy trên nền tảng .NET Framework của Microsoft. C# giúp lập trình viên tạo ra các ứng dụng đa dạng, bao gồm ứng dụng máy tính, ứng dụng di động, ứng dụng web, và cả ứng dụng Windows. Ngôn ngữ này kết hợp các tính năng mạnh mẽ từ ngôn ngữ C++ và C, nhưng có cú pháp đơn giản hơn và hỗ trợ lập trình hướng đối tượng mạnh mẽ. C# cung cấp sự an toàn kiểu tĩnh (static typing) và quản lý bộ nhớ tự động thông qua hệ thống thu dọn rác (garbage collection). Nó cũng hỗ trợ lập trình đa luồng (multithreading), lập trình sự kiện (event-driven programming), và các tính năng linh hoạt khác để giúp lập trình viên xây dựng các ứng dụng hiệu quả và bền vững. C# có sự hỗ trợ mạnh mẽ từ Microsoft và cộng đồng lập trình rộng lớn. Nó là ngôn ngữ lập trình phổ biến cho việc phát triển các ứng dụng trên nền tảng Windows và .NET.", " B# (B Sharp): B# là một ngôn ngữ lập trình chuyên về xử lý tín hiệu số (DSP) được phát triển bởi Brooks Harris. B# bao gồm các tính năng phức tạp để làm việc với âm thanh và video trong các ứng dụng thời gian thực.", "B là một ngôn ngữ lập trình đơn giản và cổ điển được phát triển vào những năm 1969-1973 bởi Dennis Ritchie tại Bell Labs. B là ngôn ngữ tiền thân của ngôn ngữ C. Đặc điểm của B bao gồm cú pháp đơn giản, hỗ trợ các cấu trúc điều khiển cơ bản và không có kiểu dữ liệu tĩnh."],
    //     typeSpeed: 17,
    //     backSpeed: 0.1,
    //     loop: true
    // });

    // var typed = new Typed(".typing-6", {
    //     strings: ["HTML", "CSS", "Java", "Java Script", "Python", "PHP", "C", "C++", "C#", "React", "ReactJS", "Vue", "Vite", "Ruby", "R", "Rust", "My SQL", "Pascal", "B", "B#", "Swift", "Visual Basic", "Lua", "MATLAB", "Dart", "Go", "Type Script", "Perl", "Objective-C", "Kotlin", "Shell Script (Bash)", "Groovy", "Scala", "Assembly", "Haskell", "Lisp", "Ada", "Prolog", "Erlang", "COBOL", "Fortran", "Scheme", "Tcl", "Elixir", "Julia", "Smalltalk", "F#", "Clojure", "VHDL", "Racket", "Còn Nhiều..."],
    //     typeSpeed: 100,
    //     backSpeed: 45,
    //     loop: true
    // });

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 0,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

var music = document.getElementById("music");
var circle = document.getElementById("circle");
var musics = ["nhacList/anh_thanh_nien.mp3", "nhacList/la_anh.mp3", "nhacList/khuat_loi.mp3", "nhacList/tuong_quan.mp3"];
var currentMusicIndex = -1

function toggleMusic() {
    if (music.paused) {
        playRandomMusic();
        circle.classList.add("on");
    } else {
        music.pause();
        circle.classList.remove("on");
    }
}

function playRandomMusic() {
    var previousMusicIndex = currentMusicIndex;
  
    do {
        currentMusicIndex = Math.floor(Math.random() * musics.length);
    } while (currentMusicIndex === previousMusicIndex);
  
    music.src = musics[currentMusicIndex];
    music.play();
}

music.onended = function() {
    playRandomMusic();
};

function sendToTelegram() {
    var nameInput = document.querySelector('.field.name input');
    var messageInput = document.querySelector('.field.textarea textarea');

    var name = nameInput.value;
    var message = messageInput.value;

    var url = 'https://api.telegram.org/bot6794603563:AAGOCCHYAXbs6FqujVSVdLYmPHuz8kJ3zyc/sendMessage';
    var params = {
      chat_id: '-1002061706055', // Thay thế YOUR_CHAT_ID bằng ID của chat hoặc người dùng Telegram nhận tin nhắn
      text: 'Name: ' + name + '\nMessage: ' + message
    };

    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        alert('Cảm ơn bạn đã đóng góp ý kiến');
        nameInput.value = '';
        messageInput.value = '';
      }
    };

    xhr.send(JSON.stringify(params));
  }
