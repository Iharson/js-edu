/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
    const basic_skills_time = 500;
    const advanced_skills_time = 800;

    if (knowsProgramming) {
        return Math.ceil(advanced_skills_time / config[focus]);
    } else {
        return Math.ceil((basic_skills_time + advanced_skills_time) / config[focus]);
    }
  };
  