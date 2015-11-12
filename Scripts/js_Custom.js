
var currentLeader = {
    playerName: null,
    madeShots: 0
};

$(document).ready(function () {
    console.log('ready!');

    getGames('0');

    $('#divContainerGame, #divWinner').hide();
    //$('#divWinner').hide();

    //$('#divContainerGame').hide();

    //createNewGame(players);



    //////////////////////////////////////////////////////////////////////////
    //Fancy Sidebar Navigation
    //////////////////////////////////////////////////////////////////////////
    var trigger = $('.hamburger'),
                overlay = $('.overlay'),
                isClosed = false;

    trigger.click(function () {
        hamburger_cross();
    });

    function hamburger_cross() {

        if (isClosed === true) {
            overlay.hide();
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
        }
        else {
            overlay.show();
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
        }
    }

    $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
    });

    var players = document.getElementById("divPlayers");
    Sortable.create(players, {
        animation: 150
    });
});

function createNewGame(players) {
    $('#divContainerGame').empty();

    var $divGameHeader = createGameHeader();
    var $divGameHeaderDivider = createGameHeaderDivider();
    var $divGame = createGame(players);

    $('#divContainerGame')
        .append($divGameHeader)
        .append($divGameHeaderDivider)
        .append($divGame);
}

function createGameHeader() {
    /*
    <div id="divGameHeader" class="row">
        <div class="col-md-11">
            <h2>Game #<span id="gameNumber">1</span> (Round <span id="roundNumber">1</span>) <small id="gameTime">10/06/2015 4:05 PM</small></h2>
        </div>
        <div class="col-md-1">
            <button class="btn btn-danger btn3d pull-right cancel-button" type="button">CANCEL</button>
        </div>
    </div>
    */
    var gameNumber = 1;
    var roundNumber = 1;
    var gameTime = moment().format("MM/DD/YYYY h:mm A");

    var $gameHeader = $('<div>');
    $gameHeader.attr('id', 'divGameHeader').addClass('row');

    var $divGameInfo = $('<div>');
    $divGameInfo.addClass('col-md-11');

    var $h2GameInfo = $('<h2>Game #<span id="gameNumber">' + gameNumber + '</span> (Round <span id="roundNumber">' + roundNumber + '</span>) <small id="gameTime">' + gameTime + '</small></h2>');

    $divGameInfo.append($h2GameInfo);

    var $divCancelButton = $('<div>');
    $divCancelButton.addClass('col-md-1');

    var $btnCancel = $('<button class="btn btn-danger btn3d pull-right cancel-button" type="button" id="btnCancelNew">CANCEL</button>');

    $divCancelButton.append($btnCancel);

    $gameHeader.append($divGameInfo).append($divCancelButton);

    return $gameHeader;
}

function createGameHeaderDivider() {
    /*
    <div class="row">
        <div class="col-md-12">
            <hr/>
        </div>
    </div>
    */

    var $div = $('<div class="row"><div class="col-md-12"><hr/></div></div>');

    return $div;
}

function createGame(players) {
    /*
    <div id="divGame" class="row">
        ...
        ...
    </div>
    */

    var $divGame = $('<div>');
    $divGame.attr('id', 'divGame').addClass('row');

    var $divPlayersSection = createPlayersSection();

    $.each(players, function (index, player) {
        $divPlayersSection.append(addPlayer(player));
    });

    $divGame.append($divPlayersSection);

    $divGame.append(createWinnerSection());

    return $divGame;
}

function createPlayersSection() {
    /*
    <div class="col-md-9 players">
        ...
        ...
    </div>
    */

    var $div = $('<div>');
    $div.addClass('col-md-9 players');

    return $div;
}

function createWinnerSection() {
    /*
    <div id="divWinner" class="col-md-3 game-winner">
        <div class="alert alert-success" role="alert">
            <div class="div-winner-span">
                <span id="theWinner" class="winner-span">WINNER</span>
            </div>
        </div>
    </div>
    */

    var $divWinner = $('<div>');
    $divWinner.attr('id', 'divWinner').addClass('col-md-3 game-winner');

    var $divAlert = $('<div>');
    $divAlert.prop('role', 'alert').addClass('alert alert-success');

    var $divSpanHolder = $('<div>');
    $divSpanHolder.addClass('div-winner-span');

    var $span = $('<span>');
    $span.attr('id', 'theWinner').addClass('winner-span').text('WINNER');

    $divSpanHolder.append($span);
    $divAlert.append($divSpanHolder);
    $divWinner.append($divAlert);

    return $divWinner;
}

function addPlayer(playerName) {
    /*
    <div class="row player-row">
        <h4 class="player-name">Justin</h4>
            <button class="btn btn-default btn-lg btn3d button-shot" type="button"><span class="glyphicon">1</span></button>
            <button class="btn btn-default btn-lg btn3d button-shot" type="button"><span class="glyphicon">2</span></button>
            <button class="btn btn-default btn-lg btn3d button-shot" type="button"><span class="glyphicon">3</span></button>
            <button class="btn btn-default btn-lg btn3d button-shot" type="button"><span class="glyphicon">4</span></button>
            <button class="btn btn-default btn-lg btn3d button-shot" type="button"><span class="glyphicon">5</span></button>
            <button class="btn btn-default btn-lg btn3d button-shot" type="button"><span class="glyphicon">6</span></button>
            <button class="btn btn-default btn-lg btn3d button-shot" type="button"><span class="glyphicon">7</span></button>
            <button class="btn btn-default btn-lg btn3d button-shot" type="button"><span class="glyphicon">8</span></button>
            <button class="btn btn-default btn-lg btn3d button-shot" type="button"><span class="glyphicon">9</span></button>
            <button class="btn btn-default btn-lg btn3d button-shot" type="button"><span class="glyphicon">10</span></button>
        <button class="btn btn-primary btn3d button-action action-start" type="button">Start</button>
    </div>
    */
    var $divRow = $('<div>');
    $divRow.addClass('row player-row');

    var $h4 = $('<h4>');
    $h4.addClass('player-name').append(playerName);

    $divRow.append($h4);

    for (i = 1; i < 11; i++) {
        var $button = $('<button>');
        $button
            .attr('type', 'button')
            .addClass('btn btn-default btn-lg btn3d button-shot');

        var $span = $('<span>');
        $span
            .addClass('glyphicon')
            .text(i);

        $button.append($span);

        $divRow.append($button);
    }

    var $btnStart = $('<button>');
    $btnStart.addClass('btn btn-primary btn3d button-action action-start').attr('type', 'button').text('Start');

    $divRow.append($btnStart);

    return $divRow;
}

function getMadeShots($thePlayerRow) {
    var attempts = $thePlayerRow.find('.button-shot').length;
    var madeShots = $thePlayerRow.find('.button-shot.btn-success').length;
    var playerName = $thePlayerRow.find('h4').text();

    $thePlayerRow
        .data('attempts', attempts)
        .data('madeShots', madeShots)
        .data('playerName', playerName);

    if (madeShots > currentLeader.madeShots) {
        currentLeader.playerName = playerName;
        currentLeader.madeShots = madeShots;
    } else if (madeShots == currentLeader.madeShots) {
        currentLeader.playerName = "TIE!";
        currentLeader.madeShots = madeShots;
    }

    return madeShots + '/' + attempts;
}

function setupNewGame() {
    $('#divContainerCreateGame').show();
    $('[data-toggle="offcanvas"]').trigger('click');
}

function setupPreviousGames() {
    $('#divContainerCreateGame, #divContainerGame').hide();
    $('[data-toggle="offcanvas"]').trigger('click');
}

function setupStatistics() {
    $('#divContainerCreateGame, #divContainerGame').hide();
    $('[data-toggle="offcanvas"]').trigger('click');
}

function determineWinner() {
    $('#theWinner').text(currentLeader.playerName);
    $('#divWinner').slideDown("slow");
}


$(document).on('click', '.sidebar-nav a', function() {
    var theId = $(this).attr('id');

    switch (theId) {
        case 'aPlayGame':
            setupNewGame();
            break;
        case 'aPreviousGames':
            setupPreviousGames();
            break;
        case 'aStatistics':
            setupStatistics();
            break;
        default:
            return false;
    }
});

$(document).on('click', '.btn3d.btn-default', function () {
    $(this).toggleClass('active').toggleClass('btn-success');
});

$(document).on('click', '#btnStartGame', function () {
    var players = [];

    //Check if any players are selected
    if ($('#divPlayers').find('input[type="checkbox"]:checked').length < 2) {
        alert('Please select at least 2 players!');
        return;
    } else {
        $('#divPlayers').find('input[type="checkbox"]:checked').each(function () {
            var thePlayer = $(this).data('player');
            players.push(thePlayer);
        });
    }

    //Check if a location is selected
    if ($('#divLocations').find('input[type="radio"]:checked').length < 1) {
        alert('No location is selected!');
        return;
    }

    var selectedLocationColor = $('#divLocations').find('input[type="radio"]:checked').data('color');

    //Good to go; now hide the game settings stuff and show the new game stuff
    $('#divContainerCreateGame').slideUp("slow");
    $('#divContainerGame').show("slow");
    createNewGame(players);
    $('#divGameHeader').addClass('bg-' + selectedLocationColor);

    $('button.button-shot').attr('disabled', 'disabled');

    //Set the number of shot attempts
    shotAttempts = $('.player-row').first().find('.button-shot').length;
});

$(document).on('click', '.button-action.action-start', function () {
    var $startButton = $(this);
    var $thisPlayerRow = $(this).closest('.player-row');
    var $allOtherPlayerRows = $('.player-row').not($thisPlayerRow);

    $thisPlayerRow.find('button').removeAttr('disabled');
    $thisPlayerRow.find('h4').css('opacity', '1.0');
    $allOtherPlayerRows.find('button').attr('disabled', 'disabled');
    $allOtherPlayerRows.find('h4').css('opacity', '0.5');
    $startButton.removeClass('action-start btn-primary').addClass('action-finish btn-warning').text('Finish');
});

$(document).on('click', '.button-action.action-finish', function () {
    var $finishButton = $(this);
    var $thisPlayerRow = $(this).closest('.player-row');
    var $playerDoneRows = $('.player-done');
    var $allOtherPlayerRows = $('.player-row').not($thisPlayerRow).not($playerDoneRows);

    $allOtherPlayerRows.find('.button-action').removeAttr('disabled');
    $allOtherPlayerRows.find('h4').css('opacity', '1.0');
    $thisPlayerRow.find('button').attr('disabled', 'disabled');
    $thisPlayerRow.find('h4').css('opacity', '0.5');
    $thisPlayerRow.addClass('player-done');
    $finishButton.removeClass('action-finish btn-warning').addClass('action-done btn-info').text('Done - ' + getMadeShots($thisPlayerRow));

    //Determine if game is over
    if ($('.player-row').length == $('.player-row.player-done').length) {
        //All players have finished; determine winner
        console.log('get winner');
        determineWinner();
    }
});


///////////////////////////////////////////////////////////////////////////////////////
//Checked List Group
///////////////////////////////////////////////////////////////////////////////////////
$(function () {
    $('.list-group.checked-list-box .list-group-item').each(function () {

        // Settings
        var $widget = $(this),
            $checkbox = $('<input type="checkbox" class="hidden" />'),
            color = ($widget.data('color') ? $widget.data('color') : "primary"),
            style = ($widget.data('style') == "button" ? "btn-" : "list-group-item-"),
            settings = {
                on: {
                    icon: 'glyphicon glyphicon-check'
                },
                off: {
                    icon: 'glyphicon glyphicon-unchecked'
                }
            };

        $widget.css('cursor', 'pointer')
        $widget.append($checkbox);

        // Event Handlers
        $widget.on('click', function () {
            $checkbox.prop('checked', !$checkbox.is(':checked'));
            $checkbox.triggerHandler('change');
            updateDisplay();
        });
        $checkbox.on('change', function () {
            updateDisplay();
        });


        // Actions
        function updateDisplay() {
            var isChecked = $checkbox.is(':checked');

            // Set the button's state
            $widget.data('state', (isChecked) ? "on" : "off");

            // Set the button's icon
            $widget.find('.state-icon')
                .removeClass()
                .addClass('state-icon ' + settings[$widget.data('state')].icon);

            // Update the button's color
            if (isChecked) {
                $widget.addClass(style + color + ' active');
            } else {
                $widget.removeClass(style + color + ' active');
            }
        }

        // Initialization
        function init() {

            if ($widget.data('checked') == true) {
                $checkbox.prop('checked', !$checkbox.is(':checked'));
            }

            updateDisplay();

            // Inject the icon if applicable
            if ($widget.find('.state-icon').length == 0) {
                $widget.prepend('<span class="state-icon ' + settings[$widget.data('state')].icon + '"></span>');
            }
        }
        init();
    });

    $('#get-checked-data').on('click', function (event) {
        event.preventDefault();
        var checkedItems = {}, counter = 0;
        $("#check-list-box li.active").each(function (idx, li) {
            checkedItems[counter] = $(li).text();
            counter++;
        });
        $('#display-json').html(JSON.stringify(checkedItems, null, '\t'));
    });
});



/*
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 AJAX Calls
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
*/
//Setup global functions to be executed when any AJAX call starts/stops
//  NOTE: To prevent a specific AJAX call from executing these functions, add "global: false" to its options
$(document)
    .ajaxStart(function () {
        //An AJAX call has started
        console.log('An AJAX call has started');
    })
    .ajaxStop(function () {
        //An AJAX call has stopped
        console.log('An AJAX call has stopped');
    })
    .ajaxError(function (event, jqxhr, settings, thrownError) {
        //An error has occurred with the AJAX request
        //Create an object with relevant information regarding the error that occurred
        var errorInformation = {
            jQueryXhr: {
                responseJson: {
                    exceptionType: null,
                    message: null,
                    stackTrace: null
                },
                responseText: {
                    exceptionType: null,
                    message: null,
                    stackTrace: null
                },
                status: jqxhr.status,
                statusText: jqxhr.statusText
            },
            ajaxRequestSettings: {
                contentType: settings.contentType,
                crossDomain: settings.crossDomain,
                data: settings.data,
                dataType: settings.dataType,
                timeout: settings.timeout,
                type: settings.type,
                url: settings.url
            },
            jQueryEvent: {
                result: event.result,
                timeStamp: new Date(event.timeStamp),
                type: event.type,
                currentTarget: {
                    url: event.currentTarget.URL,
                    referrer: event.currentTarget.referrer
                },
                target: {
                    url: event.target.URL
                }
            }
        };

        //Set the responseJSON details if they exist
        if (jqxhr.responseJSON) {
            errorInformation.jQueryXhr.responseJson.exceptionType = jqxhr.responseJSON.ExceptionType;
            errorInformation.jQueryXhr.responseJson.message = jqxhr.responseJSON.Message;
            errorInformation.jQueryXhr.responseJson.stackTrace = jqxhr.responseJSON.StackTrace;
        }

        //Stringify the object and replace all single quotes with the associated HTML encoded value to get it ready to send to the server
        var stringifiedVersion = JSON.stringify(errorInformation).replace(/'/g, '%27');

        console.log(stringifiedVersion);

        return 'ERROR!';
    });


function getGames(gameId) {
    var jqXhr = $.ajax({
        type: "POST",
        url: "ws_Basketball.asmx/GetGames",
        data: "{gameId: '" + gameId + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json"
    }).done(function (data) {
        var games = data.d;
        console.log(games);
    });
}