/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const index = email.indexOf('@');
  let domain = email.substring(index + 1);
  if (domain.indexOf('@') > 0) {
    domain = domain.substring(index);
  }
  return domain;
}

module.exports = getEmailDomain;
