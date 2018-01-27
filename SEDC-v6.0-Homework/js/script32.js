$(function () {
    // Create table object
    function Table(list) {
        this.listOfSongs = list;
        this.tbody = $('#tbody');
        this.sortingFunction = null;
        
        this.populateTable = function() {

            if (this.sortingFunction != null) {
                this.listOfSongs = this.listOfSongs.sort(this.sortingFunction);
            }

            if (parseInt($('input[name="minmax"]:checked').val()) == '0') {
                this.listOfSongs = this.listOfSongs;
            } else if (parseInt($('input[name="minmax"]:checked').val()) == '1') {
                this.listOfSongs = this.listOfSongs.reverse();
            }

            this.tbody.html('');
            this.listOfSongs.forEach(song => {
                let row = $('<tr>');
                $('<td>').text(song.rank).appendTo(row);
                $('<td>').text(song.song).appendTo(row);
                $('<td>').text(song.artist).appendTo(row);
                $('<td>').text(song.releaseYear).appendTo(row);
                $('<td>').text(song.duration).appendTo(row);

                this.tbody.append(row);
            });
        }

        // Setting the list
        this.setListOfSongs = function(list) {
            this.listOfSongs = list;
            this.populateTable();
        }

        // Setting the sorting method/function
        this.setSortingMethod = function(sortingFunction) {
            this.sortingFunction = sortingFunction;
        }
    }

    let originalList = [];

    // Creating a new Table object
    let table = new Table(originalList, false);

    //Create AJAX call to get data
    function getData() {
        $.ajax({
            method: 'GET',
            url: 'http://demo6418849.mockable.io/songs',
            success: function(data) {
                originalList = data;
                table.setListOfSongs(originalList);
            },
            error: function(error) {
                console.log(error);
            }
        });
    }

    // Create sorting function and call populateTable
    function sortData(e) {
        let chosenSort = e.target.value;
        let sortingFunction = null;
        let sortedList;
        
        switch(chosenSort) {
            case '1': // sort by rank
                sortingFunction = (songOne, songTwo) => {
                    return parseInt(songOne.rank) - parseInt(songTwo.rank);
                }
                break;
            case '2': // sort by song name
                sortingFunction = (songOne, songTwo) => {
                    return songOne.song.localeCompare(songTwo.song);
                }
                break;
            case '3': // sort by artist
                sortingFunction = (songOne, songTwo) => {
                    return songOne.artist.localeCompare(songTwo.artist);
                }
                break;
            case '4': // sort by release year
                sortingFunction = (songOne, songTwo) => {
                    return parseInt(songOne.releaseYear) - parseInt(songTwo.releaseYear);
                }
                break;
            case '5': // sort by duration
                sortingFunction = (songOne, songTwo) => {
                    return evaluateMinutesToSeconds(songOne.duration) - evaluateMinutesToSeconds(songTwo.duration);
                }
                break;
            default:
                table.setListOfSongs(originalList);
                break;
        }
        table.setSortingMethod(sortingFunction);
        table.populateTable();
    }

    // The function which will evaluate the length of the songs (minutes plus seconds)
    function evaluateMinutesToSeconds (time) {
        let changedTime = time.split(':').map(item => parseInt(item));
        return (changedTime[0] * 60) + changedTime[1];
    }
    // OR
    // function evaluateMinutesToSeconds(duration){
    //     let time = duration.split(":");
    //     return time[0] + time[1];
    // }

    // Create event listeners
    $('#pull').on('click', getData);
    $('#sort').on('change', sortData);
    $("input[name='minmax']").on('change',function(){
        $("#sort").change();
    });
});