// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
    var commandName = command.split(' ').slice(0,1).pop()
    var commandParam = command.split(' ').slice(1)
    switch (commandName){
        case 'ADD':
            var name = commandParam.slice(0, 1).shift()
            var phoneNumbers = commandParam.slice(1).shift().split(',')
            add(name, phoneNumbers)
            break
        case 'REMOVE_PHONE':
            var phoneNumber = commandParam.pop()
            return remove(phoneNumber)
            break
        case 'SHOW':
            return show()
            break
    }
};

function add(name, phoneNumbers){
    if (phoneBook.hasOwnProperty(name)){
        Array.prototype.push.apply(phoneBook[name], phoneNumbers)
    } else {
        phoneBook[name] = phoneNumbers
    }
}

function isEqualNumber(phoneNumber){
    if (this == phoneNumber){
        return true
    }
    return false
}

function remove(phoneNumber){
    for (var name in phoneBook){
        if (phoneBook[name].includes(phoneNumber)){
            phoneBook[name].splice(phoneBook[name].findIndex(isEqualNumber, phoneNumber), 1)
            if (phoneBook[name].length == 0){
                delete phoneBook[name]
            }
            return true
        } 
    }
    return false
}



function show(){
    var result = []
    for (var name in phoneBook){
        result.push(name + ': ' + phoneBook[name].join(', '))
    }
    return result.sort()
}