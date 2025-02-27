const Footer = () => {
  return (
    <footer className="bg-gray-900 backdrop-blur-sm border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-4 px-2 sm:px-3 lg:px-4"> {/* Réduction supplémentaire des valeurs de padding */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2"> {/* Réduction supplémentaire de gap */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
              Emplacement
            </h3>
            <p className="mt-1 text-sm text-gray-400"> {/* Réduction de mt et text-base à text-sm */}
              123 Zen Street<br />
              Montreal, QC H1A 1A1<br />
              Canada
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
              Contact
            </h3>
            <p className="mt-1 text-sm text-gray-400"> {/* Réduction de mt et text-base à text-sm */}
              Courriel : info@zenflow.com<br />
              Téléphone : (514) 555-0123
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
              Horaires
            </h3>
            <p className="mt-1 text-sm text-gray-400"> {/* Réduction de mt et text-base à text-sm */}
              Lundi - Vendredi : 6h - 21h<br />
              Samedi : 8h - 18h<br />
              Dimanche : 8h - 16h
            </p>
          </div>
        </div>
        <div className="mt-2 border-t border-gray-800 pt-2"> {/* Réduction supplémentaire de mt et pt */}
          <p className="text-xs text-gray-500 text-center"> {/* Réduction de text-sm à text-xs */}
            © 2025 Collège La Cité | Developpé par Joachim Luaba Kanku | Jedidiah-Lois Hyomba Nana | Fruittella Mujing Tshifungat 
            Serigne Mbacke Deme | Serigne Fallou Gueye | Ilyas Osman Saleh. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
