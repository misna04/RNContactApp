function getInitials(fullName) {
  if (!fullName) return '';

  const names = fullName.split(' ');

  if (names.length === 1) {
    // If only one name is provided, return the first character of that name
    return names[0].charAt(0).toUpperCase();
  } else {
    // If multiple names are provided, return the first character of each name
    const initials = names.map(name => name.charAt(0).toUpperCase());
    return initials.join('');
  }
}

export {getInitials};
