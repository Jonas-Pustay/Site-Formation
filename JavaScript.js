const BrowerCourse = document.getElementById("BrowerCourse");
const BrowerLine = "<div style='display: flex;'>&</div>";

function LoadCourse()
{
    var TitreFormation = "Avion en Papier";
    var DescriptionFormation = "Description";
    var ImageFormation = "Ressource\Image\Ai Icon.png";

    var AllCourse = "";

    for (var i = 0; i < 5; i++)
    {
        var LineCourse = "";

        for (var c = 0; c < 3; c++)
        {
            TitreFormation = "Formation " + (c + 1 + i * 3);
            DescriptionFormation = "Ceci est la formation " + (c + 1 + i * 3) + " qui est construit par le javascript ce qui permet une automatisation";


            LineCourse += "<div id='Container'> <div id='Div1' style='grid-row-start:1; grid-row-end:4; border-right: 1px groove;'><img src='https://connectforimpact.com/wp-content/uploads/icon-300-x-300.jpg' style = 'width: 100%;' /> <button style='font-family: ' Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;' > <big>Commencer</big></button ><h1>Temps: cinq heure</h1><p>Create by Jonas Pustay</p></div ><div style='grid-column-start: 2; grid-column-end: 4; grid-row-start: 1; grid-row-end: 4;'><h1>" + TitreFormation + "</h1><p>" + DescriptionFormation + "</p><p style=\"background: grey;\">Avion</p><p>Prerequis: HTML,JavaScript,CSS</p><p>Difficulté: intermédire</p></div ></div > ";;
        }

        AllCourse += BrowerLine.replace('&', LineCourse);
    }

    BrowerCourse.innerHTML = AllCourse;
}

LoadCourse();



