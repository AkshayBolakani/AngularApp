var myApp = angular.module("myApp",["ngRoute","ngAnimate"]);

myApp.config(function ($routeProvider) {
    $routeProvider
        .when("/books",{
            templateUrl:"partials/book-list.html",
            controller:"BookListCtrl"
        })
        .when("/kart",{
            templateUrl:"partials/kart-list.html",
            controller:"KartListCtrl"
        })
        .otherwise({
            redirectTo:"/books"
        })
});

myApp.factory("kartService", function(){
    var kart=[];
    return{
        getKart: function(){
            return kart;
        },
        addToKart: function(book){
            kart.push(book);
        },
        buy: function(book){
            alert("Thanks for buying this book", book.name);
        }
    }
});

myApp.factory("bookService", function (){
    var books= [
        {
            imageUrl:"imgs/AdulteryFinal2.jpg",
            name:"Adultery",
            price:8.99,
            rating:3.91,
            binding:"Paperback",
            publisher:"Random House India",
            releaseDate: "12-8-2014",
            details:"A woman around her thirties begins to question the routine and predictability of her days. In everybody’s eyes, she has a perfect life: a solid and stable marriage to a rich and loving husband, sweet and well-behaved children and a job as a journalist she can't complain about. However, she can no longer bear the necessary effort to fake happiness when all she feels in life is an enormous apathy, boredom and depression. All that changes when she encounters an ex-boyfriend from her adolescence. Jacob is now a successful politician and, during an interview, he ends up arousing something in her she hadn’t felt for a long time: passion. They begin an affair which leads to brutal, S/M sex that she finds very exciting. She will now do anything to conquer that impossible love, and will have to go down to the pit of human emotions to finally find her redemption."
        },
        {
            imageUrl:"imgs/DeathFinal2.jpg",
            name:"Death of Ivan Illych",
            price:4.99,
            rating:4.32,
            binding:"Paperback",
            publisher:"Phantom",
            releaseDate: "11-7-1831",
            details:"Ivan Ilyich lives a carefree life that is most simple and most ordinary and therefore most terrible. Like everyone he knows, he spends his life climbing the social ladder. Enduring marriage to a woman whom he often finds too demanding, he works his way up to be a magistrate, thanks to the influence he has over a friend who has just been promoted, focusing more on his work as his family life becomes less tolerable. While hanging curtains for his new home one day, he falls awkwardly and hurts his side. Though he does not think much of it at first, he begins to suffer from a pain in his side. As his discomfort grows, his behavior towards his family becomes more irritable. His wife finally insists that he visit a physician. The physician cannot pinpoint the source of his malady, but soon it becomes clear that his condition is terminal. Confronted with his diagnosis, Ivan attempts every remedy he can to obtain a cure for his worsening situation until the pain grows so intense he is forced to cease working and spend the remainder of his days in bed. Here, he is brought face to face with his mortality, and realizes that although he knows of it, he does not truly grasp it. During the long and painful process of death, Ivan dwells on the idea that he does not deserve his suffering because he has lived rightly. If he had not lived a good life, there could be a reason for his pain; but he has, so pain and death must be arbitrary and senseless. As he begins to hate his family for avoiding the subject of his death, for pretending he is only sick and not dying, he finds his only comfort in his peasant boy servant Gerasim, the only person in Ivan's life who does not fear death, and also the only one who, apart from his own son, shows compassion for him. Ivan begins to question whether he has, in fact, lived a good life. In the final days of his life, Ivan makes a clear split between an artificial life, such as his own, which masks the true meaning of life and makes one fear death, and an authentic life, the life of Gerasim. Authentic life is marked by compassion and sympathy; the artificial life by self-interest. Then some force strikes Ivan in the chest and side, and he is brought into the presence of a bright light. His hand falls onto his nearby son's head, and Ivan pities his son. He no longer hates his daughter or wife, but rather feels pity for them, and hopes his death will release them. In so doing, his terror of death leaves him, and as Tolstoy suggests, death itself disappears."

        },
        {
            imageUrl:"imgs/ObamaFinal2.jpg",
            name:"The Audacity of Hope: Thoughts on Reclaiming the American Dream",
            price:12.99,
            rating:3.66,
            binding:"Paperback",
            publisher:" Crown Publishing Group",
            releaseDate: "1-8-2004",
            details:"The Audacity of Hope is Barack Obama's call for a new kind of politics—a politics that builds upon those shared understandings that pull us together as Americans. Lucid in his vision of America's place in the world, refreshingly candid about his family life and his time in the Senate, Obama here sets out his political convictions and inspires us to trust in the dogged optimism that has long defined us and that is our best hope going forward."

        },
        {
            imageUrl:"imgs/SearchFinal2.jpg",
            name:"Man's Search for Meaning",
            price:6.99,
            rating:4.42,
            binding:"Hardcover",
            publisher:"Beacon Press",
            releaseDate: "4-22-1935",
            details:"Psychiatrist Viktor Frankl's memoir has riveted generations of readers with its descriptions of life in Nazi death camps and its lessons for spiritual survival. Between 1942 and 1945, Frankl labored in four different camps, including Auschwitz, while his parents, brother, and pregnant wife perished. Based on his own experience and the experiences of others he treated later in his practice, Frankl argues that we cannot avoid suffering, but we can choose how to cope with it, find meaning in it, and move forward with renewed purpose. Frankl's theory--known as logotherapy, from the Greek word logos (meaning)--holds that our primary drive in life is not pleasure, as Freud maintained, but the discovery and pursuit of what we personally find meaningful.At the time of Frankl's death in 1997, Man's Search for Meaning had sold more than 10 million copies in twenty-four languages. A 1991 reader survey for the Library of Congress that asked readers to name a book that made a difference in your life found Man's Search for Meaning among the ten most influential books in America."

        }
    ];

    return{
        getbooks: function(){
            return books;
        }

    }
});

myApp.controller("KartListCtrl",function($scope, kartService){
    $scope.kart = kartService.getKart();
    $scope.buy = function(book){
        kartService.buy(book);
    }

});

myApp.controller("HeaderCtrl",function($scope, $location){
    $scope.appDetails = {
        title: "BookArt",
        tagline: "We have 1 Million books for you."
    };
    $scope.nav
    {
        isActive = function (path) {
            if (path === $location.path()) {
                return true;
            }
            else {
                return false;
            }
        }
    }
});

myApp.controller("BookListCtrl",function($scope, bookService, kartService){
    $scope.books = bookService.getbooks();

    $scope.addToKart = function(book){
        kartService.addToKart(book);

    }
})