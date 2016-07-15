function shouldDance($time) {
    var $badeya = moment().month(8).date(21);
    return $time.isSame($badeya, 'day');
}

$(document).ready(function () {
    var $time = moment();

    var $formatted = $time.format('[the] Do [night of] MMMM');
    $('#time').text('Do you remember ' + $formatted + '?');

    var $responseBlock = $('#responseContainer');

    if (shouldDance($time)) {
        $('#firstResponse').text('Oh yes!');
        $responseBlock.append('<div class="flex justify-center"><div class="bold">Love was changing the mind of pretenders,</div></div>');
        $responseBlock.append('<div class="flex justify-center"><div class="bold">while chasing my clouds away!</div></div>');
        $('#content').append('<div class="px2 flex justify-center"><iframe width="420" height="315" src="https://www.youtube.com/embed/Gs069dndIYk?autoplay=1" frameborder="0" allowfullscreen></iframe></div>');
    } else {
        $responseBlock.append('<div class="flex justify-center"><p id="sub">(Come back when the stars steal the night away)</p></div>');
    }
});