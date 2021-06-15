const brokenCapabilities = {
    "browserName": 'chrome',
    "browserVersion": '91.0',
    "platformName": 'macOS 11',
    'sauce:options': {
        'name': 'Broken Google Search'
    }
};
const tags = ["tag1", "tag2" , "tags"]
const workingCapabilities = {
    "browserName": 'chrome',
  "browserVersion": '91.0',
  "platformName": 'macOS 11',
    'sauce:options': {
        'name': 'Guinea-Pig Sauce',
        'tags': tags
    }
};

exports.brokenCapabilities = brokenCapabilities
exports.workingCapabilities = workingCapabilities