

function Resume(props) {
    return (
        <>
            <div>
                <center>
                    <h2 style={{ "fontFamily": "italic" }}>
                        {props.name}
                    </h2>
                    <p style={{ "marginTop": -12, "fontSize": 18 }}>
                        {props.title}
                    </p>
                    <p style={{ "marginTop": -10 }}>
                        {props.phone_number} • {props.email} • {props.linkdin_profile} • {props.location}
                    </p>
                </center>
            </div>
            <div>
                <center>
                    <h2 style={{ "fontFamily": "italic", "marginBottom": 9 }}>
                        Summary
                    </h2>
                    <hr></hr>
                </center>
                <p style={{ "marginTop": -2 }}>
                    {props.summary}
                </p>
            </div>
            <div>
                <center>
                    <h2 style={{ "fontFamily": "italic", "marginBottom": 9 }}>
                        Skills
                    </h2>
                    <hr></hr>
                </center>
                <p style={{ "marginTop": -2 }}>
                    {props.business}
                </p>
                <p>
                    {props.technology}
                </p>
            </div>
            <div>
                <center>
                    <h2 style={{ "fontFamily": "italic", "marginBottom": 9 }}>
                        Experiance
                    </h2>
                    <hr></hr>
                </center>

                <p style={{ "color": "gray", "fontWeight": "bold", "fontSize": 22, "fontFamily": "simple", "marginTop": 5 }}>
                    {props.company_name1}
                </p>
                <p style={{ "float": "right", "marginTop": "-45px" }}>
                    {props.location_of_company1}
                </p>
                <h5 style={{ "marginTop": -20 }}>
                    {props.designation1}
                </h5>
                <p style={{ "float": "right", "marginTop": "-40px" }}>
                    {props.year1}
                </p>
                <p style={{ "marginTop": -15, "color": "black", "fontFamily": "simple", "fontSize": 22 }}>
                </p>
                <div>

                    <ul style={{ "fontSize": 13, "marginLeft": "-30px" }}>
                        <li>
                            {props.line1}
                        </li>
                        <li>
                            {props.line2}
                        </li>
                        <li>
                            {props.line3}
                        </li>

                    </ul>
                </div>

            </div>
            <div>

                <h5>
                    {props.designation2}
                </h5>
                <p style={{ "float": "right", "marginTop": "-40px" }}>
                    {props.year2}
                </p>
                <div>

                    <ul style={{ "fontSize": 13, "marginLeft": "-30px", "marginTop": -15, "color": "black" }}>
                        <li>
                            {props.line_1}
                        </li>
                        <li>
                            {props.line_2}
                        </li>
                        <li>
                            {props.line_3}
                        </li>

                    </ul>
                </div>
            </div>
            <div>
                <p style={{ "color": "gray", "fontWeight": "bold", "fontSize": 22, "fontFamily": "simple", "marginTop": "10px" }}>
                    {props.company_name2}
                </p>
                <p style={{ "float": "right", "marginTop": "-35px" }}>
                    {props.location_of_company2}
                </p>
                <h5 style={{ "marginTop": "-18px" }}>
                    {props.designation}
                </h5>
                <p style={{ "float": "right", "marginTop": -35 }}>
                    {props.year}
                </p>
                <p style={{ "marginTop": -20, "fontSize": 15 }}>
                    {props.history_of_company}
                </p>
                <div>
                    <ul style={{ "fontSize": 13, "marginLeft": "-30px" }}>
                        <li>
                            {props.lines1}
                        </li>
                        <li>
                            {props.lines2}
                        </li>
                        <li>
                            {props.lines3}
                        </li>
                        <li>
                            {props.lines4}
                        </li>
                    </ul>
                </div>
            </div>

            <div>
                <center>
                    <h2 style={{ "fontFamily": "italic", "marginBottom": 9 }}>
                        Education
                    </h2>
                    <hr></hr>
                </center>
                <p style={{ "color": "gray" }}>
                    {props.university1}
                </p>
                <p style={{ "float": "right", "marginTop": "-35px" }}>
                    {props.location_of_university1}
                </p>
                <h5 style={{ "marginTop": "-12px" }}>
                    {props.field1}
                </h5>
                <p style={{ "float": "right", "marginTop": "-38px" }}>
                    {props.passing_year1}
                </p>

                <p style={{ "color": "gray" }}>
                    {props.university2}
                </p>
                <p style={{ "float": "right", "marginTop": "-35px" }}>
                    {props.location_of_university2}
                </p>
                <h5 style={{ "marginTop": "-12px" }}>
                    {props.field2}
                </h5>
                <p style={{ "float": "right", "marginTop": "-38px" }}>
                    {props.passing_year2}
                </p>
            </div>

            <div>
                <center>
                    <h2 style={{ "fontFamily": "italic", "marginBottom": 9 }}>
                        Courses & Certificates
                    </h2>
                    <hr></hr>
                </center>
                <p style={{ "color": "gray" }}>
                    {props.c1}
                </p>
                <p style={{ "color": "gray" }}>
                    {props.c2}
                </p>
                <p style={{ "color": "gray" }}>
                    {props.c3}
                </p>
            </div>

            <div>
                <center>
                    <h2 style={{ "fontFamily": "italic", "marginBottom": 9 }}>
                        Interests & Hobbies
                    </h2>
                    <hr></hr>
                </center>
                <div style={{ "display": "flex", "marginRight": "10px" }}>
                    <div style={{ "width": "33.33%" }}>
                        <h4 style={{ "fontFamily": "arial" }}>
                            {props.hobby1}
                        </h4>
                        <p style={{ "marginTop": "-15px" }}>
                            {props.about_hobby1}
                        </p>
                    </div>
                    <div style={{ "width": "33.33%" }}>
                        <h4 style={{ "fontFamily": "arial" }}>
                            {props.hobby2}
                        </h4>
                        <p style={{ "marginTop": "-15px" }}>
                            {props.about_hobby2}
                        </p>
                    </div>
                    <div style={{ "width": "33.33%" }}>
                        <h4 style={{ "fontFamily": "arial" }}>
                            {props.hobby3}
                        </h4>
                        <p style={{ "marginTop": "-15px" }}>
                            {props.about_hobby3}
                        </p>
                    </div>
                </div>
                <div>
                    <p style={{ "float": "left" }}>{props.company_email}</p>
                    <p style={{ "float": "right" }}>{props.company}</p>
                </div>

            </div>
        </>

    );
}

export default Resume;
