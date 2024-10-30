function formatBlogString(inputString) {
    // Split the string by underscores if present
    let words = inputString.split('-');

    // Capitalize each word
    let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

    // Join the words with a space
    let result = capitalizedWords.join(' ');

    return result;
}

function reverseFormatString(inputString) {
    // Split the string by spaces
    let words = inputString.split(' ');

    // Convert each word to lowercase
    let lowercaseWords = words.map(word => word.charAt(0).toLowerCase() + word.slice(1).toLowerCase());

    // Join the words with underscores
    let result = lowercaseWords.join('-');

    return result;
}

const formatUrlString = (str) => {
    return str.toLowerCase().replace(/\s+/g, '-');
  };

  const extractDomain = (url) => {
    return url.replace(/^(https?:\/\/)?(www\.)?/, '').split('/')[0];
  };


  function dateTypeToString(dateStr) {
    // Split the date string into components
    let [day, month, year] = dateStr.split('/');

    // Create a new Date object
    let dateObj = new Date(`${year}-${month}-${day}`);

    // Define an array of month names
    let monthNames = ["January", "February", "March", "April", "May", "June", 
                      "July", "August", "September", "October", "November", "December"];

    // Format the date into the desired format
    let formattedDate = `${day} ${monthNames[dateObj.getMonth()]}, ${year}`;

    return formattedDate;
}



export { formatBlogString, reverseFormatString, formatUrlString,extractDomain, dateTypeToString };


