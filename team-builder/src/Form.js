import React from 'react';

const Form = props => {
    //From class notes
    const {values, inputted, submitted} = props;

    return (
        <form onSubmit={submitted}>
            <div className='formBox'>
                <div>
                    <label>Stage Name:&nbsp;</label>
                </div>
                <div>
                    <input type="text" name="hName" value={values.hName} onChange={inputted} maxLength="15" required />
                </div>
            </div>
            <div className='formBox'>
                <div>
                    <label>Email:&nbsp;</label>
                </div>
                <div>
                    <input type="email" id="emailAddr" name="email" value={values.email} onChange={inputted} required />
                </div>
            </div>
            <div className='formBox'>
                <div>
                    <label>Special Ability:&nbsp;</label>
                </div>
                <div>
                    <select name="role" value={values.role} onChange={inputted} required>
                        <option>--- Select One ---</option>
                        <option value='Graphics Designer'>Graphics Designer</option>
                        <option value='Intern'>Intern</option>
                        <option value='Front-End Developer'>Front-End Developer</option>
                        <option value='Sidekick'>Sidekick</option>
                        <option value='Lightning Control'>Lightning Control</option>
                        <option value='Video Blogger'>Video Blogger</option>
                        <option value='Pizza Orderer'>Pizza Orderer</option>
                        <option value='Back-End Developer'>Back-End Developer</option>
                        <option value='Errand Boy/Girl'>Errand Boy/Girl</option>
                        <option value='IT Specialist'>IT Specialist</option>
                        <option value='Super Speed'>Super Speed</option>
                        <option value='Accountant'>Accountant</option>
                        <option value='Liability Attorney'>Liability Attorney</option>
                        <option value='PR Specialist'>PR Specialist</option>
                        <option value='Flight'>Flight</option>
                        <option value='Star Trek Red-Shirt'>Star Trek Red-Shirt</option>
                        <option value='Coffee-making Savant'>Coffee-making Savant</option>
                    </select>
                </div>
            </div>
            <button type="submit">Join the Team</button>
        </form>
    );
};

export default Form;