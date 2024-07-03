-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: retrofilms
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `actors`
--

DROP TABLE IF EXISTS `actors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `actors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `full_name` varchar(45) DEFAULT NULL,
  `bio` varchar(10000) DEFAULT NULL,
  `profile_pic` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=155 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `actors`
--

LOCK TABLES `actors` WRITE;
/*!40000 ALTER TABLE `actors` DISABLE KEYS */;
INSERT INTO `actors` VALUES (1,'Clint Eastwood','Clint Eastwood es un actor, director y productor estadounidense. Ha sido galardonado con múltiples premios a lo largo de su carrera.','Clint-Eastwood.jpg'),(2,'Eli Wallach','Nacido el 7 de diciembre de 1915, fallecido el 24 de junio de 2014. Conocido por \"El bueno, el malo y el feo\".','Eli-Wallach.webp'),(3,'Lee Van Cleef','Nacido el 9 de enero de 1925, fallecido el 16 de diciembre de 1989. Famoso por \"El bueno, el malo y el feo\".','Lee Van Cleef.jpg'),(4,'Rada Rassimov','Nacida el 3 de marzo de 1938, fallecida el 8 de marzo de 2023. Conocida por \"El bueno, el malo y el feo\".','Rada Rassimov.jpg'),(5,'Judy Garland','Nacida el 10 de junio de 1922, fallecida el 22 de junio de 1969. Famosa por \"El mago de Oz\".','Judy_Garland.jpg'),(6,'Jack Haley','Nacido el 10 de agosto de 1898, fallecido el 6 de junio de 1979. Conocido por \"El mago de Oz\".','Jack_Haley.jpg'),(7,'Ray Bolger','Nacido el 10 de enero de 1904, fallecido el 15 de enero de 1987. Famoso por \"El mago de Oz\".','Ray_Bolger.jpg'),(8,'Bert Lahr','Nacido el 13 de agosto de 1895, fallecido el 4 de diciembre de 1967. Conocido por \"El mago de Oz\".','Bert _Lahr.jpg'),(9,'Boris Karloff','Nacido el 23 de noviembre de 1887, fallecido el 2 de febrero de 1969. Famoso por \"Frankenstein\".','FrankesteinBorisKarloff.jpg'),(10,'Colin Clive','Nacido el 20 de enero de 1900, fallecido el 25 de junio de 1937. Conocido por \"Frankenstein\".','FrankesteinColinclive.jpg'),(11,'John Boles','Nacido el 28 de octubre de 1895, fallecido el 27 de febrero de 1969. Famoso por \"Frankenstein\".','FrankesteinJohnBoles.jpg'),(12,'Mae Clarke','Nacida el 16 de agosto de 1910, fallecida el 29 de abril de 1992. Conocida por \"Frankenstein\".','FrankesteinMaeClarke.jpg'),(13,'Didi Conn','Nacida el 13 de julio de 1951. Famosa por \"Grease\".','GreaseDidiConn.jpg'),(14,'John Travolta','Nacido el 18 de febrero de 1954. Conocido por \"Grease\" y \"Pulp Fiction\".','GreaseJohnTravolta.jpg'),(15,'Olivia Newton','Nacida el 26 de septiembre de 1948, fallecida el 8 de agosto de 2022. Famosa por \"Grease\".','GreaseOliviaNewton.jpg'),(16,'Stockard Channing','Nacida el 13 de febrero de 1944. Conocida por \"Grease\" y \"The West Wing\".','GreaseStockardChanning.jpg'),(17,'Christopher Lloyd','Nacido el 22 de octubre de 1938. Famoso por \"Back to the Future\" y \"Who Framed Roger Rabbit\".','BackToTheFutureChristopherLloyd.jpg'),(18,'Crispin Glover','Nacido el 20 de abril de 1964. Conocido por \"Back to the Future\".','BackToTheFutureCrispinGlover.jpg'),(19,'Kathleen Thompson','Nacida el 19 de junio de 1954. Famosa por \"Body Heat\" y \"Romancing the Stone\".','BackToTheFutureKathleenThompson.jfif'),(20,'Michael Fox','Nacido el 9 de junio de 1961. Conocido por \"Back to the Future\" y \"Family Ties\".','BackToTheFutureMichaelFox.jpg'),(21,'Humphrey Bogart','Nacido el 25 de diciembre de 1899, fallecido el 14 de enero de 1957. Famoso por \"Casablanca\" y \"The Maltese Falcon\".','HumphreyBogart.jpg'),(22,'Peter Lorre','Nacido el 26 de junio de 1904, fallecido el 23 de marzo de 1964. Conocido por \"Casablanca\" y \"M\".','PeterLorreCasaBlanca.jpg'),(23,'Ingrid Bergman','Nacida el 29 de agosto de 1915, fallecida el 29 de agosto de 1982. Famosa por \"Casablanca\" y \"Notorious\".','IngridBergmanCasaBlanca.jpg'),(24,'Paul Henreid','Nacido el 10 de enero de 1908, fallecido el 29 de marzo de 1992. Conocido por \"Casablanca\".','PaulHenreidCasaBlanca.jpg'),(25,'Dennis Christopher','Nacido el 2 de diciembre de 1955. Famoso por \"Breaking Away\" y \"Chariots of Fire\".','Dennis_Christopher.jpg'),(26,'Harry Anderson','Nacido el 14 de octubre de 1952, fallecido el 16 de abril de 2018. Conocido por \"Night Court\".','harry_anderson.jpg'),(27,'Richard Masur','Nacido el 20 de noviembre de 1948. Famoso por \"The Thing\".','Richard_Masur.jpg'),(28,'Richard Thomas','Nacido el 13 de junio de 1951. Conocido por \"The Waltons\".','richard_thomas.jpg'),(29,'Christopher Reeve','Nacido el 25 de septiembre de 1952, fallecido el 10 de octubre de 2004. Famoso por \"Superman\".','christopher_reeve.jpg'),(30,'Gene Hackman','Nacido el 30 de enero de 1930. Conocido por \"The French Connection\" y \"Superman\".','gene_hackman.jpg'),(31,'Margot Kidder','Nacida el 17 de octubre de 1948, fallecida el 13 de mayo de 2018. Famosa por \"Superman\".','margot_kidder.jpg'),(32,'Marlon Brando','Nacido el 3 de abril de 1924, fallecido el 1 de julio de 2004. Conocido por \"The Godfather\" y \"A Streetcar Named Desire\".','marlon_brando.jpg'),(33,'Ned Beatty','Nacido el 6 de julio de 1937, fallecido el 13 de junio de 2021. Famoso por \"Deliverance\" y \"Superman\".','ned_beatty.jpg'),(34,'Charlton Heston','Nacido el 4 de octubre de 1923, fallecido el 5 de abril de 2008. Conocido por \"Ben-Hur\" y \"Planet of the Apes\".','charlton_heston.jpg'),(35,'James Whitmore','Nacido el 1 de octubre de 1921, fallecido el 6 de febrero de 2009. Famoso por \"The Shawshank Redemption\".','james_whitmore.jpg'),(36,'Kim Hunter','Nacida el 12 de noviembre de 1922, fallecida el 11 de septiembre de 2002. Conocida por \"Planet of the Apes\".','kim_hunter.jpg'),(37,'Maurice Evans','Nacido el 3 de junio de 1901, fallecido el 12 de marzo de 1989. Famoso por \"Planet of the Apes\".','maurice_evans.jpg'),(38,'Roddy McDowall','Nacido el 17 de septiembre de 1928, fallecido el 3 de octubre de 1998. Conocido por \"Planet of the Apes\".','roddy_mcdowall.jpg'),(39,'Ed Wynn','Nacido el 9 de noviembre de 1886, fallecido el 19 de junio de 1966. Famoso por \"Mary Poppins\" y \"Alice in Wonderland\".','ed_wynn.jpg'),(40,'Jerry Colonna','Nacido el 17 de septiembre de 1904, fallecido el 21 de noviembre de 1986. Conocido por su voz en \"Alice in Wonderland\".','jerry_colonna.jpg'),(41,'Kathryn Beaumont','Nacida el 27 de junio de 1938. Famosa por ser la voz de Alicia en \"Alice in Wonderland\".','kathryn_beaumont.jpg'),(42,'Richard Haydn','Nacido el 10 de marzo de 1905, fallecido el 25 de abril de 1985. Conocido por \"Alice in Wonderland\".','richard_haydn.jpg'),(43,'Sterling Holloway','Nacido el 4 de enero de 1905, fallecido el 22 de noviembre de 1992. Famoso por ser la voz de Winnie the Pooh.','sterling_holloway.jpg'),(44,'Al Pacino','Nacido el 25 de abril de 1940. Conocido por \"The Godfather\" y \"Scarface\".','al_pacino.jpg'),(45,'Diane Keaton','Nacida el 5 de enero de 1946. Famosa por \"Annie Hall\" y \"The Godfather\".','Diane-Keaton.webp'),(46,'Robert De Niro','Nacido el 17 de agosto de 1943. Conocido por \"Taxi Driver\" y \"Raging Bull\".','Robert-De-Niro.jpg'),(47,'Audrey Hepburn','Nacida el 4 de mayo de 1929, fallecida el 20 de enero de 1993. Famosa por \"Breakfast at Tiffanys\" y \"Roman Holiday\".','AudreyHepburn.jpeg'),(48,'Buddy Ebsen','Nacido el 2 de abril de 1908, fallecido el 6 de julio de 2003. Conocido por \"The Beverly Hillbillies\".','Buddy_Ebsen_-_USCG.jpeg'),(49,'George Peppard','Nacido el 1 de octubre de 1928, fallecido el 8 de mayo de 1994. Famoso por \"Breakfast at Tiffanys\" y \"The A-Team\".','George_Peppard_(1964).jpeg'),(50,'John McGiver','Nacido el 5 de noviembre de 1913, fallecido el 9 de septiembre de 1975. Conocido por \"Breakfast at Tiffanys\".','John_McGiver_1964.jpeg'),(51,'Jose de Vilallonga','Nacido el 29 de enero de 1920, fallecido el 30 de agosto de 2007. Famoso por \"Breakfast at Tiffanys\".','Jose de Vilallonga_(cropped).jpeg'),(52,'Martin Balsam','Nacido el 4 de noviembre de 1919, fallecido el 13 de febrero de 1996. Conocido por \"Psycho\".','Martin_Balsam_Film_Still.jpeg'),(53,'Mickey Rooney','Nacido el 23 de septiembre de 1920, fallecido el 6 de abril de 2014. ','Mickey_Rooney_still.jpeg'),(54,'Patricia Neal','Nacida el 20 de enero de 1926, fallecida el 8 de agosto de 2010. Conocida por \"Hud\" y \"Breakfast at Tiffanys\".','Patricia_Neal_1952.jpeg'),(55,'Stanley Adams','Nacido el 7 de abril de 1915, fallecido el 27 de abril de 1977. Famoso por \"Breakfast at Tiffanys\" y \"Star Trek\".','Stanley_Adams.jpeg'),(56,'Emilio Echevarría','Nacido el 13 de diciembre de 1944. Conocido por \"Amores Perros\" y \"Y tu mamá también\".','Emilio-Echevarria.jpg'),(57,'Gael García Bernal','Nacido el 30 de noviembre de 1978. Famoso por \"Amores Perros\" y \"Y tu mamá también\"','Gael-Garcia-Bernal.webp'),(58,'Gerardo Campbell','Gerardo Campbell es un actor mexicano conocid','Gerardo-Campbell.webp'),(59,'Vanessa Bauche','Nacida el 18 de febrero de 1973. Conocida por \"Amores Perros\"','Vanessa-Bauche.jpg'),(60,'Haya Harareet','Nacida el 20 de septiembre de 1931, fallecida el 3 de febrero de 2019. Famosa por \"Ben-Hur\".','haya_harareet.jpg'),(61,'Jack Hawkins','Nacido el 14 de septiembre de 1910, fallecido el 18 de julio de 1973. Conocido por \"Lawrence of Arabia\" y \"Ben-Hur\".','Jack-Hawkins.webp'),(62,'Stephen Boyd','Nacido el 4 de julio de 1931, fallecido el 2 de junio de 1977. Famoso por \"Ben-Hur\".','Stephen-Boyd.jpg'),(63,'Vivien Leigh','Nacida el 5 de noviembre de 1913, fallecida el 8 de julio de 1967. Conocida por \"Gone with the Wind\".','vivien_leigh.jpeg'),(64,'Clark Gable','Nacido el 1 de febrero de 1901, fallecido el 16 de noviembre de 1960. Famoso por \"Gone with the Wind\" y \"It Happened One Night\".','clark_gable.jpeg'),(65,'Hattie McDaniel','Nacida el 10 de junio de 1893, fallecida el 26 de octubre de 1952. Conocida por \"Gone with the Wind\".','hattie_mcdaniel.jpeg'),(66,'Leslie Howard','Nacida el 10 de junio de 1893, fallecida el 26 de octubre de 1952. Conocida por \"Gone with the Wind\".','leslie_howard.jpeg'),(67,'Olivia de Havilland','Nacida el 1 de julio de 1916, fallecida el 26 de julio de 2020. Conocida por \"Gone with the Wind\" y \"The Adventures of Robin Hood\".','olivia_de_havilland.jpeg'),(68,'Alain Cuny','Nacido el 12 de julio de 1908, fallecido el 16 de mayo de 1994. Famoso por \"La Dolce Vita\".','alain_cuny.jpeg'),(69,'Anita Ekberg','Nacida el 29 de septiembre de 1931, fallecida el 11 de enero de 2015. Conocida por \"La Dolce Vita\".','anita_ekberg.jpeg'),(70,'Anouk Aimee','Nacida el 27 de abril de 1932. Famosa por \"La Dolce Vita\" y \"A Man and a Woman\".','anouk_aimee.jpeg'),(71,'Marcello Mastroianni','Nacido el 28 de septiembre de 1924, fallecido el 19 de diciembre de 1996. Conocido por \"La Dolce Vita\" y \"8½\".','marcello_mastroianni.jpeg'),(72,'Yvonne Furneaux','Nacida el 11 de mayo de 1928. Famosa por \"La Dolce Vita\" y \"Repulsion\".','yvonne_furneaux.jpeg'),(73,'Minoru Chiaki','Nacido el 30 de julio de 1917, fallecido el 1 de noviembre de 1999. Conocido por \"Seven Samurai\".','minoru_chiaki.jpeg'),(74,'Seiji Miyaguchi','Nacido el 15 de noviembre de 1913, fallecido el 12 de abril de 1985. Famoso por \"Seven Samurai\".','seiji_miyaguchi.jpeg'),(75,'Takashi Shimura','Nacido el 12 de marzo de 1905, fallecido el 11 de febrero de 1982. Conocido por \"Seven Samurai\".','takashi_shimura.jpeg'),(76,'Tochiro Mifune','Nacido el 1 de abril de 1920, fallecido el 24 de diciembre de 1997. Famoso por \"Seven Samurai\" y \"Rashomon\".','toshiro_mifune.jpeg'),(77,'Yoshio Inaba','Nacido el 15 de julio de 1920, fallecido el 20 de abril de 1998. Conocido por \"Seven Samurai\".','yoshio_inaba.jpeg'),(78,'Charles Chaplin','Nacido el 16 de abril de 1889, fallecido el 25 de diciembre de 1977. Famoso por \"Tiempos modernos\" y \"El gran dictador\".','charles_chaplin.jpeg'),(79,'Chester Conklin','Nacido el 11 de enero de 1886, fallecido el 11 de octubre de 1971. Conocido por \"Tiempos modernos\".','chester_conklin.jpeg'),(80,'Henry Bergman','Nacido el 23 de febrero de 1868, fallecido el 22 de octubre de 1946. Famoso por trabajar con Charlie Chaplin.','henry_bergman.jpeg'),(81,'Paulette Goddard','Nacida el 3 de junio de 1910, fallecida el 23 de abril de 1990. Conocida por \"Tiempos modernos\" y \"El gran dictador\".','paulette_goddard.jpeg'),(82,'Stanley Standford','Stanley Standford fue un actor estadounidense','stanley_stanford.jpeg'),(83,'Claudia Cardinale','Nacida el 15 de abril de 1938. Famosa por \"8½\" y \"El Gatopardo\".','claudia_cardinale.jpg'),(84,'Jose Lewgoy','Nacido el 16 de noviembre de 1920, fallecido el 10 de febrero de 2003. Conocido por \"Fitzcarraldo\".','jose_lewgoy.jpg'),(85,'Klaus Kinski','Nacido el 18 de octubre de 1926, fallecido el 23 de noviembre de 1991. Famoso por \"Aguirre, la ira de Dios\" y \"Nosferatu el vampiro\".','klaus_kinski.jpg'),(86,'Miguel Angel Fuentes','Conocido por \"Fitzcarraldo\".','miguel_angel_fuentes.jpg'),(87,'Paul Hittscher','Conocido por \"Fitzcarraldo\".','paul_hittscher.jpg'),(88,'Corinne Orr','Nacida el 6 de enero de 1936. Famosa por dar voz a Trixie en \"Speed Racer\".','corinne_orr.jpg'),(89,'Robert Spencer','Conocido por dar voz a Racer X en \"Speed Racer\".','robert_spencer.jpg'),(90,'Shannon Conley','Shannon Conley es una actriz estadounidense c','shannon_conley.jpg'),(91,'Dakota Fanning','Nacida el 23 de febrero de 1994. Famosa por \"La guerra de los mundos\" e \"Yo soy Sam\".','dakota_fanning.jpg'),(92,'Hitoshi Takagi','Nacido el 27 de febrero de 1925, fallecido el 11 de febrero de 2004. Conocido por dar voz a Totoro en \"Mi vecino Totoro\".','hitoshi_takagi.jpg'),(93,'Noriko Hidaka','Nacida el 31 de mayo de 1962. Famosa por dar voz a Satsuki en \"Mi vecino Totoro\".','noriko_hidaka.jpg'),(94,'Shigesato Itoi','Nacido el 10 de noviembre de 1948. Conocido por dar voz al padre en \"Mi vecino Totoro\".','Shigesato_Itoi.jpeg'),(95,'Kurtwood Smith','Nacido el 3 de julio de 1943. Famoso por \"RoboCop\" y \"That 70s Show\".','kurtwood_smith.jpg'),(96,'Miguel Ferrer','Nacido el 7 de febrero de 1955, fallecido el 19 de enero de 2017. Conocido por \"RoboCop\" y \"Twin Peaks\".','miguel_ferrer.jpg'),(97,'Nancy Allen','Nacida el 24 de junio de 1950. Famosa por \"Carrie\" y \"RoboCop\".','nancy_allen.jpg'),(98,'Peter Weller','Nacido el 24 de junio de 1947. Conocido por \"RoboCop\" y \"Buckaroo Banzai\".','peter_weller.jpg'),(99,'Ronny Cox','Nacido el 23 de julio de 1938. Famoso por \"Deliverance\" y \"RoboCop\".','ronny_cox.jpg'),(100,'Dorothy Comingo','Nacida el 24 de agosto de 1913, fallecida el 30 de diciembre de 1971. Conocida por \"Ciudadano Kane\".','dorothy_comingore.jpeg'),(101,'Everett Sloane','Nacido el 1 de octubre de 1909, fallecido el 6 de agosto de 1965. Famoso por \"Ciudadano Kane\".','everett_sloane.jpeg'),(102,'George Coulouris','Nacido el 1 de octubre de 1903, fallecido el 25 de abril de 1989. Conocido por \"Ciudadano Kane\".','george_coulouris.jpeg'),(103,'Joseph Cotten','Nacido el 15 de mayo de 1905, fallecido el 6 de febrero de 1994. Famoso por \"Citizen Kane\" y \"Shadow of a Doubt\".','joseph_cotten.jpeg'),(104,'Orson Welles','Nacido el 6 de mayo de 1915, fallecido el 10 de octubre de 1985. Conocido por \"Citizen Kane\" y \"Touch of Evil\".','Orson-Welles.jpeg'),(105,'Henry Daniell','Nacido el 5 de marzo de 1894, fallecido el 31 de octubre de 1963. Famoso por \"The Great Dictator\" y \"The Philadelphia Story\".','henry_daniell.jpeg'),(106,'Jack Oakie','Nacido el 12 de noviembre de 1903, fallecido el 23 de enero de 1978. Conocido por \"The Great Dictator\" y \"The Marx Brothers\".','jack_oakie.jpeg'),(107,'Reginald Gardiner','Nacido el 27 de febrero de 1903, fallecido el 7 de julio de 1980. Famoso por \"The Great Dictator\" y \"The Flying Deuces\".','reginald_gardiner.jpeg'),(108,'Daniel Richter','Nacido el 22 de septiembre de 1937, fallecido el 30 de septiembre de 2021. Conocido por interpretar al Hombre Mono en \"2001: Una odisea del espacio\".','daniel_richter.jpeg'),(109,'Gary Lockwood','Nacido el 21 de febrero de 1937. Famoso por \"2001: A Space Odyssey\" y \"Star Trek\".','gary_lockwood.jpeg'),(110,'Keir Dullea','Nacido el 30 de mayo de 1936. Conocido por \"2001: A Space Odyssey\".','keir_dullea.jpeg'),(111,'Leonard Rossiter','Nacido el 21 de octubre de 1926, fallecido el 5 de octubre de 1984. Famoso por \"2001: A Space Odyssey\" y \"Rising Damp\".','leonard_rossiter.jpeg'),(112,'William Sylvester','Nacido el 31 de enero de 1922, fallecido el 25 de enero de 1995. Conocido por \"2001: A Space Odyssey\" y \"Gorgo\".','william_sylvester.jpeg'),(113,'Anthony Edwards','Nacido el 19 de julio de 1962. Famoso por \"Top Gun\" y \"ER\".','anthony_edwards.jpeg'),(114,'Kelly McGillis','Nacido el 19 de julio de 1962. Famoso por \"Top Gun\" y \"ER\".','kelly_mcgillis.jpeg'),(115,'Tom Cruise','Nacido el 3 de julio de 1962. Famoso por \"Top Gun\" y \"Mission: Impossible\".','tom_cruise.jpeg'),(116,'Tom Skerritt','Nacido el 25 de agosto de 1933. Conocido por \"Top Gun\" y \"Alien\".','tom_skerritt.jpeg'),(117,'Val Kilmer','Nacido el 31 de diciembre de 1959. Famoso por \"Top Gun\" y \"Batman Forever\".','val_kilmer.jpeg'),(118,'Adam Baldwin','Nacido el 27 de febrero de 1962. Conocido por \"Full Metal Jacket\" y \"Firefly\".','adam_baldwin.jpeg'),(119,'Arliss Howard','Nacido el 18 de octubre de 1954. Famoso por \"Full Metal Jacket\" y \"The Lost World: Jurassic Park\".','arliss_howard.jpeg'),(120,'Dorian Harewood','Nacido el 6 de agosto de 1950. Conocido por \"Full Metal Jacket\" y \"Roots: The Next Generations\".','dorian_harewood.jpeg'),(121,'Matthew Modine','Nacido el 22 de marzo de 1959. Famoso por \"Full Metal Jacket\" y \"Stranger Things\".','matthew_modine.jpeg'),(122,'R Lee Ermey','Nacido el 24 de marzo de 1944, fallecido el 15 de abril de 2018. Conocido por \"Full Metal Jacket\".','r_lee_ermey.jpeg'),(123,'Vincent D Onofrio','Nacido el 30 de junio de 1959. Famoso por \"Full Metal Jacket\" y \"Law & Order: Criminal Intent\".','vincent_d_onofrio.jpeg'),(124,'Noah Hathaway','Nacido el 13 de noviembre de 1971. Conocido por \"The NeverEnding Story\" y \"Battlestar Galactica\".','Noah-Hathaway.jpg'),(125,'Barret Oliver','Nacido el 24 de agosto de 1973. Famoso por \"The NeverEnding Story\" y \"D.A.R.Y.L.\".','Barret-Oliver.jpg'),(126,'Gerald McRaney','Nacido el 19 de agosto de 1947. Conocido por \"The NeverEnding Story\" y \"Simon & Simon\".','Gerald-McRaney.jpg'),(127,'Tami Stronach','Nacida el 31 de julio de 1972. Famosa por \"The NeverEnding Story\".','Tami-Stronach.jpg'),(128,'Mary Steenburgen','Nacida el 8 de febrero de 1953. Conocida por \"Back to the Future Part III\" y \"The Help\".','Mary_Steenburgen.jpg'),(129,'Gloria Stuart','Nacida el 4 de julio de 1910, fallecida el 26 de septiembre de 2010. Famosa por \"Titanic\".','gloria_stuart.jpg'),(130,'Kathy Bates','Nacida el 28 de junio de 1948. Conocida por \"Misery\" y \"Titanic\".','kathy_bates.jpg'),(131,'Leonardo DiCaprio','Nacido el 11 de noviembre de 1974. Famoso por \"Titanic\" y \"The Revenant\".','leonardo_dicaprio.png'),(132,'Billy Zane','Nacido el 24 de febrero de 1966. Conocido por \"Titanic\" y \"The Phantom\".','Billy_Zane.jpg'),(133,'Faye Dunaway','Nacida el 14 de enero de 1941. Famosa por \"Bonnie and Clyde\" y \"Network\".','Faye_Dunaway.jpg'),(134,'Kim Novak','Nacida el 13 de febrero de 1933. Conocida por \"Vertigo\" y \"Bell Book and Candle\".','Kim_Novak.jpg'),(135,'Richard Beymer','Nacido el 20 de febrero de 1938. Famoso por \"West Side Story\" y \"Twin Peaks\".','Richard_Beymer.jpeg'),(144,'Alec Guinness','Actor británico aclamado por su versatilidad y talento.Conocido por sus papeles en películas como \"Lawrence de Arabia\", \"Doctor Zhivago\" y, por supuesto, \"Obi-Wan Kenobi\" en la trilogía original de Star Wars.Ganador de un Premio de la Academia y un Premio BAFTA.','alec_guinness.jpeg'),(145,'Carrie Fisher','Actriz y guionista estadounidense, famosa por su papel de la Princesa Leia en la saga Star Wars.También conocida por su trabajo en películas como \"Shampoo\", \"Singingin the Rain\" y \"Postcards from the Edge\".Activista por la salud mental y defensora de los derechos de las mujeres.','carrie_fisher.jpeg'),(146,'Harrison Ford','Actor estadounidense reconocido por sus papeles icónicos en películas de acción y aventura.Interpretó a Han Solo en la trilogía original de Star Wars e Indiana Jones en la saga homónima.Ganador de un Premio Globo de Oro y nominado a cuatro Premios de la Academia.','harrison_ford.jpeg'),(147,'Mark Hamill','Actor estadounidense que saltó a la fama por su papel de Luke Skywalker en la trilogía original de Star Wars.Ha prestado su voz a personajes animados como Joker en la serie de Batman y Luke Skywalker en la serie Star Wars: Rebels.También ha trabajado en teatro y televisión.','mark_hamill.jpeg'),(148,'Peter Cushing','Actor británico conocido por sus papeles en películas de terror y ciencia ficción.Interpretó al Gran Moff Tarkin en la película original de Star Wars y al Doctor Who en varias ocasiones.Considerado un ícono del cine de culto.','peter_cushing.jpeg'),(149,'George OBrien','Actor estadounidense conocido por sus papeles en películas de acción y aventura durante la era del cine mudo.Protagonizó películas como \"El águila de los Andes\", \"Murallas de bambú\" y \"El precio de la gloria\".Trabajó con grandes directores como John Ford y Raoul Walsh.','George_Obrien.jpg'),(150,'Janet Gaynor','Actriz estadounidense y una de las primeras estrellas del cine sonoro.Ganó un Premio de la Academia a la Mejor Actriz por su papel en la película \"Tres almas en pena\" (1929).También conocida por sus papeles en películas como \"El séptimo cielo\" (1927) y \"Sangre y arena\" (1922).','Janet _Gaynor.jpg'),(151,'Margaret Livingston','Actriz estadounidense que interpretó a la bruja malvada del oeste en la película \"El mago de Oz\" (1939).También conocida por sus papeles en películas como \"El gato y el violín\" (1931) y \"El hombre lobo\" (1941).Una figura icónica del cine clásico de Hollywood.','Margaret_Livingston.jpg'),(152,'Bodil Rosing','Actriz danesa que trabajó en películas estadounidenses y europeas durante la era del cine mudo.Conocida por sus papeles en películas como \"El gran Gatsby\" (1926), \"Metrópolis\" (1927) y \"La viuda alegre\" (1925).Una actriz versátil que se destacó en diferentes géneros.','Bodil_Rosing.jpg'),(153,'J. Farrell McDonald','Actor estadounidense conocido por sus papeles secundarios en películas de la era del cine mudo.A menudo interpretaba a personajes cómicos o villanos.Apareció en más de 300 películas a lo largo de su carrera.','J.Farrell_McDonald.jpg'),(154,'Lea Thompson','actriz, directora y productora estadounidense. Conocida principalmente por su papel de Lorraine McFly en la trilogía \"Regreso al futuro\", también ha protagonizado películas como \"All the Right Moves\", \"Howard the Duck\" y \"The Beverly Hillbillies\".','Lea_Thompson.jpg');
/*!40000 ALTER TABLE `actors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `actors_movies`
--

DROP TABLE IF EXISTS `actors_movies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `actors_movies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Actors_id` int(11) NOT NULL,
  `Movies_id` int(11) NOT NULL,
  PRIMARY KEY (`id`,`Actors_id`,`Movies_id`),
  KEY `fk_Actors_has_Movies_Movies1_idx` (`Movies_id`),
  KEY `fk_Actors_has_Movies_Actors1_idx` (`Actors_id`),
  CONSTRAINT `fk_Actors_has_Movies_Actors1` FOREIGN KEY (`Actors_id`) REFERENCES `actors` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Actors_has_Movies_Movies1` FOREIGN KEY (`Movies_id`) REFERENCES `movies` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=164 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `actors_movies`
--

LOCK TABLES `actors_movies` WRITE;
/*!40000 ALTER TABLE `actors_movies` DISABLE KEYS */;
INSERT INTO `actors_movies` VALUES (2,2,95),(3,3,95),(4,4,95),(5,5,96),(6,6,96),(7,7,96),(8,8,96),(9,9,97),(10,10,97),(11,11,97),(12,12,97),(13,13,98),(14,14,98),(15,15,98),(16,16,98),(17,17,99),(18,18,99),(19,19,99),(20,20,99),(21,21,100),(22,22,100),(23,23,100),(24,24,100),(25,25,101),(26,26,101),(27,27,101),(28,28,101),(29,29,102),(30,30,102),(31,31,102),(33,33,102),(34,34,103),(35,35,103),(36,36,103),(37,37,103),(38,38,103),(39,39,104),(40,40,104),(41,41,104),(42,42,104),(43,43,104),(44,44,11),(45,45,11),(47,46,11),(48,47,12),(49,48,12),(50,49,12),(51,50,12),(52,51,12),(53,52,12),(54,53,12),(55,54,12),(56,55,12),(57,56,13),(58,57,13),(59,58,13),(60,59,13),(61,34,14),(62,60,14),(63,61,14),(64,62,14),(65,63,15),(66,64,15),(67,65,15),(68,66,15),(69,67,15),(70,68,16),(71,69,16),(72,70,16),(73,71,16),(74,72,16),(75,73,17),(76,74,17),(77,75,17),(78,76,17),(79,77,17),(80,1,95),(81,78,18),(82,79,18),(83,80,18),(84,81,18),(85,82,18),(86,83,19),(87,84,19),(88,85,19),(89,86,19),(90,87,19),(91,88,20),(92,89,20),(93,90,20),(94,91,21),(95,92,21),(96,93,21),(97,94,21),(98,95,22),(99,96,22),(100,97,22),(101,98,22),(102,99,22),(103,100,23),(104,101,23),(105,102,23),(107,103,23),(108,104,23),(111,105,24),(112,106,24),(113,107,24),(114,108,25),(115,109,25),(116,110,25),(117,111,25),(118,112,25),(119,113,26),(120,114,26),(121,115,26),(122,116,26),(123,117,26),(125,119,28),(126,120,28),(127,118,28),(130,121,28),(131,122,28),(132,123,28),(133,124,29),(134,125,29),(135,126,29),(136,127,29),(137,17,99),(138,128,99),(139,144,31),(140,145,31),(141,146,31),(142,147,31),(143,148,31),(144,149,27),(145,150,27),(146,151,27),(147,152,27),(148,153,27),(149,32,11),(152,51,100),(153,52,103),(154,53,102),(155,54,100),(156,55,100),(157,61,100),(158,67,100),(159,78,24),(160,132,30),(161,20,30),(162,17,30),(163,154,30);
/*!40000 ALTER TABLE `actors_movies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `Users_id` int(11) NOT NULL,
  PRIMARY KEY (`id`,`Users_id`),
  KEY `fk_Cart_Users1_idx` (`Users_id`),
  CONSTRAINT `fk_Cart_Users1` FOREIGN KEY (`Users_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'admin'),(2,'platino'),(3,'invitado');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genres`
--

DROP TABLE IF EXISTS `genres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genres` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genres`
--

LOCK TABLES `genres` WRITE;
/*!40000 ALTER TABLE `genres` DISABLE KEYS */;
INSERT INTO `genres` VALUES (1,'Romance'),(2,'Ciencia Ficcion'),(3,'Fantasía'),(4,'Acción'),(5,'Aventura'),(6,'Infantil'),(7,'Western'),(8,'Bélico'),(9,'Drama'),(10,'Comedia'),(11,'Animación'),(12,'Épico'),(13,'Histórico'),(14,'Suspenso'),(15,'Crimen');
/*!40000 ALTER TABLE `genres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `image_type`
--

DROP TABLE IF EXISTS `image_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `image_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name_type` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image_type`
--

LOCK TABLES `image_type` WRITE;
/*!40000 ALTER TABLE `image_type` DISABLE KEYS */;
INSERT INTO `image_type` VALUES (1,'portada'),(2,'normal');
/*!40000 ALTER TABLE `image_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name_URL` varchar(500) DEFAULT NULL,
  `Movies_id` int(11) NOT NULL,
  `categoria_tipo` varchar(50) NOT NULL,
  PRIMARY KEY (`id`,`Movies_id`,`categoria_tipo`),
  KEY `fk_Images_Movies1_idx` (`Movies_id`),
  KEY `fk_Images_image_type1_idx` (`categoria_tipo`),
  CONSTRAINT `fk_Images_Movies1` FOREIGN KEY (`Movies_id`) REFERENCES `movies` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=240 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'El-padrino-02.webp',11,'portada'),(2,'padrino1.jpeg',11,'imagen'),(3,'padrino2.jpeg',11,'imagen'),(4,'padrino3.jpeg',11,'imagen'),(5,'padrino4.jpeg',11,'imagen'),(6,'BAT_poster.jpeg',12,'portada'),(7,'BT-img1.jpeg',12,'imagen'),(8,'BT-img2.jpeg',12,'imagen'),(9,'BT-img3.jpeg',12,'imagen'),(10,'BT-img4.jpeg',12,'imagen'),(11,'Amores-Perros-01.jpg',13,'portada'),(12,'Amores-Perros-02.jpg',13,'imagen'),(13,'Amores-Perros-03.jpg',13,'imagen'),(14,'Amores-Perros-04.jpg',13,'imagen'),(15,'Amores-Perros-05.webp',13,'imagen'),(16,'Ben-Hur_01.webp',14,'portada'),(17,'Ben-Hur_02.jpg',14,'imagen'),(18,'Ben-Hur_03.jpg',14,'imagen'),(19,'Ben-Hur_04.jpeg',14,'imagen'),(20,'ben-hur5.jpeg',14,'imagen'),(21,'LoQueElVientoSeLlevo.jpeg',15,'portada'),(22,'loqueElViento1.jpeg',15,'imagen'),(23,'loqueElViento2.jpeg',15,'imagen'),(24,'loqueElViento3.jpeg',15,'imagen'),(25,'loqueElViento4.jpeg',15,'imagen'),(26,'LaDolceVita-poster.jpeg',16,'portada'),(27,'ladolce1.jpeg',16,'imagen'),(28,'ladolce2.jpeg',16,'imagen'),(29,'ladolce3.jpeg',16,'imagen'),(30,'ladolce4.jpeg',16,'imagen'),(31,'seven_samurai_poster.jpg',17,'portada'),(32,'sietesamurai1.jpeg',17,'imagen'),(33,'sietesamurai2.jpeg',17,'imagen'),(34,'sietesamurai3.jpeg',17,'imagen'),(35,'sietesamurai4.jpeg',17,'imagen'),(36,'tiempos_modernos.jpg',18,'portada'),(37,'tiemposmodernos1.jpeg',18,'imagen'),(38,'tiemposmodernos2.jpeg',18,'imagen'),(39,'tiemposmodernos3.jpeg',18,'imagen'),(40,'tiemposmodernos4.jpeg',18,'imagen'),(41,'fitzcarraldo.jpg',19,'portada'),(42,'fitzcarraldo1.jpg',19,'imagen'),(43,'fitzcarraldo2.jpg',19,'imagen'),(44,'fitzcarraldo3.jpg',19,'imagen'),(45,'fitzcarraldo4.jpg',19,'imagen'),(46,'TDLL.jpg',20,'portada'),(47,'TDLL1.jpg',20,'imagen'),(48,'TDLL2.jpg',20,'imagen'),(49,'TDLL3.jpg',20,'imagen'),(50,'TDLL4.jpg',20,'imagen'),(51,'mi_vecino_totoro.jpg',21,'portada'),(52,'mi_vecino_totoro1.jpg',21,'imagen'),(53,'mi_vecino_totoro2.jpg',21,'imagen'),(54,'mi_vecino_totoro3.jpg',21,'imagen'),(55,'mi_vecino_totoro4.jpg',21,'imagen'),(56,'robocop.jpg',22,'portada'),(57,'robocop1.jpg',22,'imagen'),(58,'robocop2.jpg',22,'imagen'),(59,'robocop3.jpg',22,'imagen'),(60,'robocop4.jpg',22,'imagen'),(61,'citizen_kane-Poster.jpeg',23,'portada'),(62,'CiudadanoKane1.jpeg',23,'imagen'),(63,'ciudadanoKane2.jpeg',23,'imagen'),(64,'ciudadanoKane3.jpeg',23,'imagen'),(65,'ciudadanoKane4.jpeg',23,'imagen'),(66,'the_great_dictator-Poster.jpeg',24,'portada'),(67,'Dictador1.jpeg',24,'imagen'),(68,'Dictador2.jpeg',24,'imagen'),(69,'Dictador3.jpeg',24,'imagen'),(70,'Dictador4.jpeg',24,'imagen'),(71,'spaceOdyssey-Poster.jpeg',25,'portada'),(72,'odisea1.jpeg',25,'imagen'),(73,'odisea2.jpeg',25,'imagen'),(74,'odisea3.jpeg',25,'imagen'),(75,'odisea4.jpeg',25,'imagen'),(76,'top_gun-Poster.jpeg',26,'portada'),(77,'topGun1.jpeg',26,'imagen'),(78,'topGun2.jpeg',26,'imagen'),(79,'topGun3.jpeg',26,'imagen'),(80,'topGun4.jpeg',26,'imagen'),(81,'Amanecer-poster.jpeg',27,'portada'),(82,'amanecer1.jpeg',27,'imagen'),(83,'amanecer2.jpeg',27,'imagen'),(84,'amanecer3.jpeg',27,'imagen'),(85,'amanecer4.jpeg',27,'imagen'),(86,'full_metal_jacket-Poster.jpeg',28,'portada'),(87,'metalJacket1.jpeg',28,'imagen'),(88,'metalJacket2.jpeg',28,'imagen'),(89,'metalJacket3.jpeg',28,'imagen'),(90,'metalJacket4.jpeg',28,'imagen'),(91,'La_Historia_Interminable_01.webp',29,'portada'),(92,'historiaInt5.jpeg',29,'imagen'),(93,'La_Historia_Interminable_02.webp',29,'imagen'),(94,'La_Historia_Interminable_03.jpg',29,'imagen'),(95,'La_Historia_Interminable_04.jpeg',29,'imagen'),(96,'back-to-the-future.jpg',30,'portada'),(97,'BackToTheFuture.jpg',30,'imagen'),(98,'BackToTheFuture2.jpg',30,'imagen'),(99,'BackToTheFuture3.webp',30,'imagen'),(100,'BackToTheFuture4.jpg',30,'imagen'),(101,'star wars.webp',31,'portada'),(102,'starwars1.jpeg',31,'imagen'),(103,'starwars2.jpeg',31,'imagen'),(104,'starwars3.jpeg',31,'imagen'),(105,'starwars4.jpeg',31,'imagen'),(106,'El_bueno_el_malo_el_feo_03.webp',95,'portada'),(107,'El_bueno_el_feo_y_el_malo_01.jpg',95,'imagen'),(108,'El_bueno_el_malo_el_feo_02.jpg',95,'imagen'),(109,'El_bueno_el_malo_el_feo_03.webp',95,'imagen'),(110,'El_bueno_el_malo_el_feo_04.jpg',95,'imagen'),(111,'mago de oz.jpg',96,'portada'),(112,'magoDeOz(reparto).jfif',96,'imagen'),(113,'magoDeOz(reparto)3.jfif',96,'imagen'),(114,'magoDeOz(reparto)2.jfif',96,'imagen'),(115,'magoDeOz(reparto)4.jfif',96,'imagen'),(116,'frankenstein.jpg',97,'portada'),(117,'Frankestein.webp',97,'imagen'),(118,'Frankestein2.webp',97,'imagen'),(119,'Frankestein3.jfif',97,'imagen'),(120,'Frankestein4.webp',97,'imagen'),(121,'Grease.jpg',98,'portada'),(122,'Grease.jfif',98,'imagen'),(123,'Grease1.avif',98,'imagen'),(124,'Grease3.webp',98,'imagen'),(125,'Grease4.webp',98,'imagen'),(126,'Back_to_the_Future_Part_III.jpg',99,'portada'),(127,'BTF3.jpg',99,'imagen'),(128,'BTF3_2.jpg',99,'imagen'),(129,'BTF3_3.jpg',99,'imagen'),(130,'BTF3_4.jpg',99,'imagen'),(131,'Casablanca copy.jpg',100,'portada'),(132,'Casablanca.jpg',100,'imagen'),(133,'Casablanca1.webp',100,'imagen'),(134,'Casablanca2.webp',100,'imagen'),(135,'Casablanca3.jpg',100,'imagen'),(136,'IT.jpeg',101,'portada'),(137,'it1.jpg',101,'imagen'),(138,'it2.webp',101,'imagen'),(139,'it4.jpg',101,'imagen'),(140,'it3.jpg',101,'imagen'),(141,'superman.jpg',102,'portada'),(142,'superman1.jpg',102,'imagen'),(143,'superman2.jpg',102,'imagen'),(144,'superman3.jpg',102,'imagen'),(145,'superman4.jpg',102,'imagen'),(146,'planet_of_the_apes.jpg',103,'portada'),(147,'planet_of_the_apes1.jpg',103,'imagen'),(148,'planet_of_the_apes2.jpg',103,'imagen'),(149,'planet_of_the_apes3.jpg',103,'imagen'),(150,'planet_of_the_apes4.jpg',103,'imagen'),(151,'alice_in_wonderland.jpg',104,'portada'),(152,'alice_in_wonderland1.jpg',104,'imagen'),(153,'alice_in_wonderland2.jpg',104,'imagen'),(154,'alice_in_wonderland3.jpg',104,'imagen'),(155,'alice_in_wonderland4.jpg',104,'imagen');
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies`
--

DROP TABLE IF EXISTS `movies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `length` int(10) DEFAULT NULL,
  `release_date` year(4) DEFAULT NULL,
  `price` int(5) DEFAULT NULL,
  `description` varchar(800) DEFAULT NULL,
  `top_movie` tinyint(1) DEFAULT NULL,
  `is_carrousell` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=127 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies`
--

LOCK TABLES `movies` WRITE;
/*!40000 ALTER TABLE `movies` DISABLE KEYS */;
INSERT INTO `movies` VALUES (11,'El Padrino',175,1972,6,'América, años 40. Don Vito Corleone (Marlon Brando) es el respetado y temido jefe de una de las cinco familias de la mafia de Nueva York. Tiene cuatro hijos: Connie (Talia Shire), el impulsivo Sonny (James Caan), el pusilánime Fredo (John Cazale) y Michael (Al Pacino), que no quiere saber nada de los negocios de su padre. Cuando Corleone, en contra de los consejos de Il consigliere Tom Hagen (Robert Duvall), se niega a participar en el negocio de las drogas, el jefe de otra banda ordena su asesinato. Empieza entonces una violenta y cruenta guerra entre las familias mafiosas.',0,0),(12,'Breakfast at Tiffany\'s',115,1961,3,'Holly Golightly es una bella joven neoyorquina que, aparentemente, lleva una vida fácil y alegre. Tiene un comportamiento bastante extravagante, por ejemplo, desayunar contemplando el escaparate de la lujosa joyería Tiffanys. Un día se muda a su mismo edificio Paul Varjak, un escritor que, mientras espera un éxito que nunca llega, vive a costa de una mujer madura.',0,0),(13,'Amores Perros',154,2000,4,'Octavio, un joven adolescente enamorado de su cuñada, ha transformado a su perro Cofi en una mortífera arma con la que desea escapar de su miseria amorosa.',0,0),(14,'Ben-Hur',212,1959,5,'Antigua Roma, bajo el reinado de los emperadores Augusto y Tiberio (s. I d.C.). Judá Ben-Hur (Charlton Heston), hijo de una familia noble de Jerusalén, y Mesala (Stephen Boyd), tribuno romano que dirige los ejércitos de ocupación, son dos antiguos amigos, pero un accidente involuntario los convierte en enemigos irreconciliables: Ben-Hur es acusado de atentar contra la vida del nuevo gobernador romano, y Mesala lo encarcela a él y a su familia. Mientras Ben-Hur es trasladado a galeras para cumplir su condena, un hombre llamado Jesús de Nazaret se apiada de él y le da de beber. En galeras conocerá al comandante de la nave (Jack Hawkins) y más tarde a un jeque árabe (Hugh Griffith) que participa con sus magníficos caballos en carreras de cuadrigas.',0,0),(15,'Lo que el viento se llevó',238,1939,5,'Georgia, 1861. En la elegante mansión sureña de Tara, vive Scarlett O\'Hara (Vivien Leigh), la joven más bella, caprichosa y egoísta de la región. Ella suspira por el amor de Ashley (Leslie Howard), pero él está prometido con su prima, la dulce y bondadosa Melanie (Olivia de Havilland). En la última fiesta antes del estallido de la Guerra de Secesión (1861-1865), Scarlett conoce al cínico y apuesto Rhett Butler (Clark Gable), un vividor arrogante y aventurero, que sólo piensa en sí mismo y que no tiene ninguna intención de participar en la contienda. Lo único que él desea es hacerse rico y conquistar el corazón de la hermosa Scarlett.',0,0),(16,'La Dolce Vita',174,1960,4,'Marcello Rubini es un desencantado periodista romano, en busca de celebridades, que se mueve con insatisfacción por las fiestas nocturnas que celebra la burguesía de la época. Merodea por distintos lugares de Roma, siempre rodeado de todo tipo de personajes, especialmente de la élite de la sociedad italiana. En una de sus salidas se entera de que Sylvia, una célebre diva del mundo del cine, llega a Roma, cree que ésta es una gran oportunidad para conseguir una gran noticia, y, en consecuencia, la perseguirá por las noches por diferentes lugares de la ciudad.',0,0),(17,'Seven Samurai',207,1954,6,'Japón, Siglo XVI. Una aldea de campesinos indefensos es repetidamente atacada y saqueada por una banda de forajidos. Aconsejados por el anciano de la aldea, unos aldeanos acuden a la ciudad con el objetivo de contratar a un grupo de samuráis para protegerlos. A pesar de que el único salario es comida y techo, varios samuráis se van incorporando uno a uno al singular grupo que finalmente se dirige a la aldea.',0,0),(18,'Tiempos Modernos',87,1936,4,'Extenuado por el frenético ritmo de la cadena de montaje, un obrero metalúrgico acaba perdiendo la razón. Después de recuperarse en un hospital, sale y es encarcelado por participar en una manifestación en la que se encontraba por casualidad. En la cárcel, también sin pretenderlo, ayuda a controlar un motín, gracias a lo cual queda en libertad. Una vez fuera, reemprende la lucha por la supervivencia en compañía de una joven huérfana a la que conoce en la calle.',0,0),(19,'Fitzcarraldo',158,1982,5,'Brian Sweeney Fitzgerald, más conocido como Fitzcarraldo, es un hombre obsesionado por la ópera. Harto de la incompetencia de los empresarios discográficos de Perú, decide financiar una lujosa puesta en escena de \"El anillo del nibelungo\" de Wagner con sus propios medios. Para ello, Fitzcarraldo pretende explotar un yacimiento de caucho inaccesible situado en las profundidades de la selva peruana. Convencido de que está predestinado para llevar a cabo esta hazaña, Fitzcarraldo se embarca en una aventura sin precedentes: hacer rodar un barco de vapor de más de 300 toneladas por una montaña y a través de una empinada pendiente.',0,0),(20,'El viaje de Chihiro',125,2001,6,'Chihiro es una niña de diez años que viaja en coche con sus padres. Después de atravesar un túnel, llegan a un mundo fantástico, en el que no hay lugar para los seres humanos, sólo para los dioses de primera y segunda clase. Cuando descubre que sus padres han sido convertidos en cerdos, Chihiro se siente muy sola y asustada. ',0,0),(21,'Mi Vecino Totoro',86,1988,4,'En los años 50, una familia japonesa se traslada al campo. Las dos hijas, Satsuki y Mei, entablan amistad con Totoro, un espíritu del bosque. El padre es un profesor universitario que estimula la imaginación de sus hijas relatándoles fábulas e historias mágicas sobre duendes, fantasmas y espíritus protectores de los hogares, mientras la madre se encuentra enferma en el hospital.',0,0),(22,'Robocop',102,1987,5,'Ambientada en una sociedad futura. Alex J. Murphy, agente de policía de Detroit, es asesinado en acto de servicio. Para acabar con la delincuencia en la ciudad, las autoridades aprueban la creación de una máquina letal, mitad robot, mitad hombre, a la que llaman Robocop, y para fabricarla utilizan el cuerpo de Murphy. El experimento parece un éxito, pero el policía, a pesar de estar muerto, conserva la memoria y decide vengarse de sus asesinos.',0,0),(23,'Ciudadano Kane',119,1961,4,'Un importante magnate estadounidense, Charles Foster Kane, dueño de una importante cadena de periódicos, de una red de emisoras, de dos sindicatos y de una inimaginable colección de obras de arte, muere en Xanadú, su fabuloso castillo de estilo oriental. La última palabra que pronuncia antes de expirar, \"Rosebud\", cuyo significado es un enigma, despierta una enorme curiosidad tanto en la prensa como entre la población. Así, un grupo de periodistas emprende una investigación para desentrañar el misterio.',0,0),(24,'El Gran Dictador',125,1940,4,'Un humilde barbero judío que combatió con el ejército de Tomania en la Primera Guerra Mundial vuelve a su casa años después del fin del conflicto. Amnésico a causa de un accidente de avión, no recuerda prácticamente nada de su vida pasada, y no conoce la situación política actual del país: Adenoid Hynkel, un dictador fascista y racista, ha llegado al poder y ha iniciado la persecución del pueblo judío, a quien considera responsable de la situación de crisis que vive el país. Paralelamente, Hynkel y sus colaboradores han empezado a preparar una ofensiva militar destinada a la conquista de todo el mundo.',0,0),(25,'2001: A Space Odyssey',149,1968,6,'La película de ciencia-ficción por excelencia de la historia del cine narra los diversos periodos de la historia de la humanidad, no sólo del pasado, sino también del futuro. Hace millones de años, antes de la aparición del homo sapiens, unos primates descubren un monolito que los conduce a un estadio de inteligencia superior. Millones de años después, otro monolito, enterrado en una luna, despierta el interés de los científicos. Por último, durante una misión de la NASA, HAL 9000, una máquina dotada de inteligencia artificial, se encarga de controlar todos los sistemas de una nave espacial tripulada.',0,0),(26,'Top Gun',110,1986,21,'La Marina de los Estados Unidos ha creado una escuela de élite para pilotos con el fin de sacar una promoción de expertos en técnicas de combate. En la academia, más conocida como Top Gun, a los mejores se les entrena para ser intrépidos y fríos al mismo tiempo, capaces de no perder los nervios en situaciones extremas y de no inmutarse al romper la barrera del sonido a los mandos de un F-14. A la escuela llega el joven Maverick, famoso por su temeraria aunque brillante forma de pilotar.',0,0),(27,'Amanecer',94,1927,9,'Un granjero (George O\'Brien) convive felizmente en el campo con su esposa (Janet Gaynor). Pero la aparición de una seductora mujer (Margaret Livingston) de la ciudad hace que comience a enamorarse de ésta, y a pensar que su mujer es un estorbo que se interpone en la felicidad entre él y su nueva y sofisticada amante.',0,0),(28,'La chaqueta metalica',116,1987,17,'Un grupo de reclutas se prepara en Parris Island, centro de entrenamiento de la marina norteamericana. Están bajo las órdenes del sargento Hartman, duro e implacable, cuya única misión en la vida es endurecer el cuerpo y el alma de los novatos, con el objetivo de que en el futuro puedan defenderse del enemigo. Pero no todos los jóvenes están preparados para soportar sus métodos.',0,0),(29,'La Historia Interminable',102,1984,19,'Un niño que pasa por un gran dolor descubre un mundo fantástico que está en peligro a través de un libro misterioso, que lo llevará a un gran viaje para enfrentar sus miedos.',1,0),(30,'Back To The Future III',121,1990,6,'Retoma la historia justo después de los eventos de la segunda película, con Marty McFly descubriendo una carta de su amigo, el Dr. Emmett Doc Brown, que fue escrita en 1885. La carta revela que Doc está atrapado en el Viejo Oeste después de haber sido enviado accidentalmente allí por una falla en la máquina del tiempo.',1,0),(31,'Star Wars',118,1977,6,'La princesa Leia, líder del movimiento rebelde que desea reinstaurar la República en la galaxia en los tiempos ominosos del Imperio, es capturada por las Fuerzas Imperiales, capitaneadas por el implacable Darth Vader, el sirviente más fiel del Emperador. El intrépido y joven Luke Skywalker, ayudado por Han Solo, capitán de la nave espacial El Halcón Milenario, y los androides, R2D2 y C3PO, serán los encargados de luchar contra el enemigo e intentar rescatar a la princesa para volver a instaurar la justicia en el seno de la galaxia.',1,0),(95,'El bueno, el feo y el malo',178,1962,6,'Tres hombres violentos pelean por una caja que alberga 200 000 dólares, la cual fue escondida durante la Guerra Civil. Dado que ninguno puede encontrar la tumba donde está el botín sin la ayuda de los otros dos, deben colaborar, pese a odiarse.',0,1),(96,'El Mago de Oz',102,1939,6,'Una joven llamada Dorothy Gale, quien es llevada por un tornado desde su hogar en Kansas hasta la tierra mágica de Oz. En su viaje para encontrar al Mago de Oz y regresar a casa, Dorothy se une a un espantapájaros, un hombre de hojalata y un león cobarde. Juntos, enfrentan varios desafíos y adversidades mientras buscan la ayuda del Mago para cumplir sus deseos.',0,1),(97,'Frankestein',70,1931,6,'El Dr. Henry Frankenstein, un joven y apasionado científico, asistido por el jorobado Fritz, crea un cuerpo humano, cuyas partes han sido recolectadas secretamente y de varias fuentes. El anhelo que consume al doctor es el de crear vida humana a través de varios artefactos eléctricos perfeccionados por él mismo.',0,1),(98,'Grease',110,1978,6,'El rebelde Danny Zuko y la inocente australiana Sandy mantienen un romance durante las vacaciones, creyendo que no se volverán a ver; sin embargo, para sorpresa de ambos, se reencuentran en la escuela secundaria al empezar el nuevo curso.',0,1),(99,'Back To The Future',116,1985,6,'Marty McFly un adolescente que accidentalmente viaja en el tiempo desde 1985 hasta 1955 en un DeLorean modificado por su amigo científico, el Dr. Emmett Doc Brown,  Marty se encuentra con versiones más jóvenes de sus padres y debe asegurarse de que se enamoren para garantizar su propia existencia en el futuro. Mientras intenta encontrar una forma de regresar a su propio tiempo, Marty también debe lidiar con una serie de eventos que podrían alterar el curso de la historia, incluyendo ayudar a un joven Doc Brown a inventar la máquina del tiempo.',0,1),(100,'Casa Blanca',102,1942,6,'En Marruecos, el dueño de un café ayuda a su ex novia y a su marido a escapar de los nazis.',0,1),(101,'It',192,1990,6,'Un tranquilo y pequeño pueblo de Maine está siendo aterrorizado por una fuerza malévola oculta tras la máscara de un payaso, y que tan sólo se la conoce como It. Tras sus primeras víctimas, una pandilla formada por siete amigos de la infancia dedicen volver a reunirse para atacar el mal y destruirlo, intentando librar así del terror a su pueblo natal.',0,1),(102,'Superman',143,1978,6,'Desde una galaxia remota, un recién nacido es enviado por sus padres al espacio debido a la inminente destrucción del planeta donde viven. La nave aterriza en la Tierra, y el niño es adoptado por unos granjeros que le inculcan los mejores valores humanos. Con los años, el joven se irá a Metrópolis y allí usará sus poderes sobrenaturales para luchar contra el mal.',0,1),(103,'El planeta de los simios',112,1968,6,'George Taylor es un astronauta que forma parte de la tripulación de una nave espacial -en una misión de larga duración- que se estrella en un planeta desconocido en el que, a primera vista, no hay vida inteligente. Sin embargo, muy pronto se dará cuenta de que está gobernado por una raza de simios mentalmente muy desarrollados que esclavizan a unos seres humanos que carecen de la facultad de hablar. Cuando su líder, el doctor Zaius, descubre horrorizado que Taylor posee el don de la palabra, decide que hay que eliminarlo',0,1),(104,'Alicia en el pais de las maravillas',75,1951,6,'Historia de magia y fantasía en la que la joven Alicia se sumerge en el sorprendente País de las Maravillas y conoce a extraordinarios personajes como Tweedledee y Tweedledum, el Sombrerero Loco, La Reina de Corazones y el frenético Conejo Blanco.',0,1);
/*!40000 ALTER TABLE `movies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies_cart`
--

DROP TABLE IF EXISTS `movies_cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movies_cart` (
  `id` int(11) NOT NULL,
  `Movies_id` int(11) NOT NULL,
  `Cart_id` int(11) NOT NULL,
  PRIMARY KEY (`Movies_id`,`Cart_id`,`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_Movies_has_Cart_Cart1_idx` (`Cart_id`),
  KEY `fk_Movies_has_Cart_Movies1_idx` (`Movies_id`),
  CONSTRAINT `fk_Movies_has_Cart_Cart1` FOREIGN KEY (`Cart_id`) REFERENCES `cart` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Movies_has_Cart_Movies1` FOREIGN KEY (`Movies_id`) REFERENCES `movies` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies_cart`
--

LOCK TABLES `movies_cart` WRITE;
/*!40000 ALTER TABLE `movies_cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `movies_cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies_genres`
--

DROP TABLE IF EXISTS `movies_genres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movies_genres` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Movie_id` int(11) NOT NULL,
  `Genre_id` int(11) NOT NULL,
  PRIMARY KEY (`id`,`Movie_id`,`Genre_id`),
  KEY `fk_Movies_has_Genres_Genres1_idx` (`Genre_id`),
  KEY `fk_Movies_has_Genres_Movies1_idx` (`Movie_id`),
  CONSTRAINT `fk_Movies_has_Genres_Genres1` FOREIGN KEY (`Genre_id`) REFERENCES `genres` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Movies_has_Genres_Movies1` FOREIGN KEY (`Movie_id`) REFERENCES `movies` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies_genres`
--

LOCK TABLES `movies_genres` WRITE;
/*!40000 ALTER TABLE `movies_genres` DISABLE KEYS */;
INSERT INTO `movies_genres` VALUES (1,100,1),(2,12,1),(3,14,1),(4,15,1),(5,26,1),(6,27,1),(7,25,2),(8,22,2),(9,102,2),(10,103,2),(11,97,2),(12,99,2),(13,96,3),(14,101,3),(15,102,3),(16,104,3),(17,21,3),(18,29,3),(19,22,4),(20,26,4),(21,102,5),(22,103,5),(23,104,5),(24,15,5),(25,17,5),(26,19,5),(27,20,5),(28,21,6),(29,30,6),(30,104,6),(31,95,7),(32,28,8),(33,11,9),(34,12,9),(35,13,9),(36,14,9),(37,15,9),(38,16,9),(39,17,9),(40,19,9),(41,23,9),(42,26,9),(43,27,9),(44,28,9),(45,12,10),(46,16,10),(47,18,10),(48,24,10),(49,98,10),(50,99,10),(51,20,11),(52,104,11),(53,21,11),(54,14,12),(55,14,13),(56,13,14),(57,11,15);
/*!40000 ALTER TABLE `movies_genres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `profile_pic` varchar(200) NOT NULL,
  `password` varchar(100) NOT NULL,
  `Categories_id` int(11) NOT NULL,
  PRIMARY KEY (`id`,`Categories_id`),
  UNIQUE KEY `username_UNIQUE` (`username`),
  KEY `fk_Users_Categories1_idx` (`Categories_id`),
  CONSTRAINT `fk_Users_Categories1` FOREIGN KEY (`Categories_id`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (21,'John Doe','john_doe0.19498557615558204','john_doe@example.com','profile1.jpg','password1',2),(22,'Jane Smith','jane_smith0.5147741674583165','jane_smith@example.com','profile2.jpg','password2',3),(23,'Michael Johnson','michael_johnson0.025839272910579362','michael_johnson@example.com','profile3.jpg','password3',3),(24,'Emily Brown','emily_brown0.8579789547789646','emily_brown@example.com','profile4.jpg','password4',1),(25,'Christopher Wilson','christopher_wilson0.06904696120791785','christopher_wilson@example.com','profile5.jpg','password5',2),(26,'Jessica Lee','jessica_lee0.5900819465425629','jessica_lee@example.com','profile6.jpg','password6',3),(27,'David Martinez','david_martinez0.5901346100402387','david_martinez@example.com','profile7.jpg','password7',2),(28,'Sarah Taylor','sarah_taylor0.9018203484842743','sarah_taylor@example.com','profile8.jpg','password8',2),(29,'Daniel Anderson','daniel_anderson0.8233754074418689','daniel_anderson@example.com','profile9.jpg','password9',2),(30,'Lisa Thomas','lisa_thomas0.5277498816398437','lisa_thomas@example.com','profile10.jpg','password10',3),(31,'Matthew White','matthew_white0.6168693607830157','matthew_white@example.com','profile11.jpg','password11',2),(32,'Jennifer Martin','jennifer_martin0.9707691967215102','jennifer_martin@example.com','profile12.jpg','password12',1),(33,'Andrew Garcia','andrew_garcia0.8927907672643576','andrew_garcia@example.com','profile13.jpg','password13',3),(34,'Jessica Martinez','jessica_martinez0.22610208413200647','jessica_martinez@example.com','profile14.jpg','password14',1),(35,'James Robinson','james_robinson0.2608229697317099','james_robinson@example.com','profile15.jpg','password15',3),(36,'Amanda Clark','amanda_clark0.9207179443172346','amanda_clark@example.com','profile16.jpg','password16',2),(37,'Ryan Rodriguez','ryan_rodriguez0.14623449104487382','ryan_rodriguez@example.com','profile17.jpg','password17',2),(38,'Ashley Hall','ashley_hall0.491994107600296','ashley_hall@example.com','profile18.jpg','password18',3),(39,'Justin Wright','justin_wright0.03177790160456477','justin_wright@example.com','profile19.jpg','password19',1),(40,'Laura Young','laura_young0.17583343868687137','laura_young@example.com','profile20.jpg','password20',3);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-24 21:31:47
