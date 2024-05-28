import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Competences() {
  return (
    <div className="h-screen bg-gray-100">
      <div className="flex-col items-center h-full p-5 text-justify text-gray-700 lg:p-20">
        <Link href={'/'}>
          <ArrowLeftIcon className="absolute w-10 h-10 text-blue-500 top-5 left-10" />
        </Link>
       
        <div className="font-extrabold position:relative right:10px">
          <h1 className="my-8 text-center text-5xl font-extrabold md:text-6xl lg:text-7xl">
            Guide d'analyse du dashboard
          </h1>
          <h1 className="my-8 text-2xl font-bold md:text-3xl lg:text-4xl">
            Contexte
            <p className="my-8 text-base md:text-base lg:text-base font-normal">
             Cette matrice de compétences a été remplie en auto-notation par les étudiants en début d'année et a pour but d'être réévalués plusieurs fois tout au long de l'année.
              <br></br>
              Chaque compétence a été notée de 1 à 5.
              <br></br>
              <br></br>
              Avec ces informations, il sera possible de voir l'évolution des étudiants dans les différents domaines de compétences vues en projets.
              <br></br>
              <br></br>
            </p>
            Description des onglets
            <ul class="list-square ml-8">
              <br></br>
              <li className="my-8 text-xl md:text-xl lg:text-xl">Total :</li>
              <p className="my-8 text-base md:text-base lg:text-base font-normal">
                Cette page permet d'avoir un aperçu des notes cumulées des étudiants dans chaque catégorie.
                Cela permet de voir dans quelles compétences les étudiants se sentent le plus à l'aise.
              </p>
              <li className="my-8 text-xl md:text-xl lg:text-xl">Erudits :</li>
              <p className="my-8 text-base md:text-base lg:text-base font-normal">
                Cet onglet offre la possibilité de voir la distribution du niveau de compétences des élèves pour la catégorie souhaitée.
                De plus, le tableau à gauche permet de voir les élèves les plus à l'aise avec la ou les technologies sélectionnées.
              </p>
              <li className="my-8 text-xl md:text-xl lg:text-xl">Individuels :</li>
              <p className="my-8 text-base md:text-base lg:text-base font-normal">
                Cet onglet, quant à lui, offre une vision centrée sur la progression des élèves dans le temps.
                Sur la gauche, un graphique montre les compétences cumulées de l'étudiant selon les techniques. Ce qui permet de faire ressortir les points forts de l'étudiant.
                <br></br>
                Le graphique de gauche permet de visualiser la progression d'un étudiant dans le temps. Il est possible de choisir une technique en particulier.
              </p>
              <p className="my-8 text-base md:text-base lg:text-base font-normal">
                Les volets de filtres sont liés aux différents onglets.
              </p>
              <br></br>
            </ul>
          </h1>
        </div>
        <div className="flex items-center justify-center w-full">
          <a href="https://app.powerbi.com/reportEmbed?reportId=12f6d628-7428-49f0-9e2c-600c760996b0&autoAuth=true&ctid=35c1785d-3361-4341-a29e-fc685e52b8a5" target="_blank" rel="noopener noreferrer" className="rounded-lg shadow-lg">
            Go to Power BI Page
          </a>

        </div>
      </div>
    </div>
  );
}
