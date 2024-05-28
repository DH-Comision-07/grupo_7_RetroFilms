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
  `bio` varchar(45) DEFAULT NULL,
  `profile_pic` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=144 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `actors`
--

LOCK TABLES `actors` WRITE;
/*!40000 ALTER TABLE `actors` DISABLE KEYS */;
INSERT INTO `actors` VALUES (1,'Clint Eastwood','Clint Eastwood es un actor, director y produc','Clint_Eastwood.jpeg'),(2,'Eli Wallach','Eli Wallach fue un actor estadounidense conoc','Eli_Wallach.jpeg'),(3,'Lee Van Cleef','Lee Van Cleef fue un actor estadounidense con','Lee_Van_Cleef.jpeg'),(4,'Rada Rassimov','Rada Rassimov es una actriz italiana conocida','Rada_Rassimov.jpeg'),(5,'Judy Garland','Judy Garland fue una actriz y cantante estado','Judy_Garland.jpeg'),(6,'Jack Haley','Jack Haley fue un actor y comediante estadoun','Jack_Haley.jpeg'),(7,'Ray Bolger','Ray Bolger fue un actor, cantante y bailarín ','Ray_Bolger.jpeg'),(8,'Bert Lahr','Bert Lahr fue un actor y comediante estadouni','Bert_Lahr.jpeg'),(9,'Boris Karloff','Boris Karloff fue un actor británico conocido','Boris_Karloff.jpeg'),(10,'Colin Clive','Colin Clive fue un actor británico conocido p','Colin_Clive.jpeg'),(11,'John Boles','John Boles fue un actor y cantante estadounid','John_Boles.jpeg'),(12,'Mae Clarke','Mae Clarke fue una actriz estadounidense cono','Mae_Clarke.jpeg'),(13,'Didi Conn','Didi Conn es una actriz estadounidense conoci','Didi_Conn.jpeg'),(14,'John Travolta','John Travolta es un actor, bailarín y cantant','John_Travolta.jpeg'),(15,'Olivia Newton','Olivia Newton-John es una cantante y actriz b','Olivia_Newton.jpeg'),(16,'Stockard Channing','Stockard Channing es una actriz estadounidens','Stockard_Channing.jpeg'),(17,'Christopher Lloyd','Christopher Lloyd es un actor estadounidense ','Christopher_Lloyd.jpeg'),(18,'Crispin Glover','Crispin Glover es un actor estadounidense con','Crispin_Glover.jpeg'),(19,'Kathleen Thompson','Kathleen Thompson es una actriz estadounidens','Kathleen_Thompson.jpeg'),(20,'Michael Fox','Michael J. Fox es un actor, productor y activ','Michael_Fox.jpeg'),(21,'Humphrey Bogart','Humphrey Bogart fue un actor estadounidense c','humphrey_bogart.jpg'),(22,'Peter Lorre','Peter Lorre fue un actor austrohúngaro-estado','peter_lorre.jpg'),(23,'Ingrid Bergman','Ingrid Bergman fue una actriz sueca reconocid','ingrid_bergman.jpg'),(24,'Paul Henreid','Paul Henreid fue un actor y director austriac','paul_henreid.jpg'),(25,'Dennis Christopher','Dennis Christopher es un actor estadounidense','dennis_christopher.jpg'),(26,'Harry Anderson','Harry Anderson fue un actor y comediante esta','harry_anderson.jpg'),(27,'Richard Moll','Richard Moll es un actor estadounidense conoc','richard_masur.jpg'),(28,'Richard Thomas','Richard Thomas es un actor estadounidense con','richard_thomas.jpg'),(29,'Christopher Reeve','Christopher Reeve fue un actor estadounidense','christopher_reeve.jpg'),(30,'Gene Hackman','Gene Hackman es un actor retirado estadounide','gene_hackman.jpg'),(31,'Margot Kidder','Margot Kidder fue una actriz canadiense-estad','margot_kidder.jpg'),(32,'Marlon Brando','Marlon Brando fue un actor y director estadou','marlon_brando.jpg'),(33,'Ned Beatty','Ned Beatty fue un actor estadounidense conoci','ned_beatty.jpg'),(34,'Charlton Heston','Charlton Heston fue un actor estadounidense c','charlton_heston.jpg'),(35,'James Whitmore','James Whitmore fue un actor estadounidense co','james_whitmore.jpg'),(36,'Kim Hunter','Kim Hunter fue una actriz estadounidense cono','kim_hunter.jpg'),(37,'Maurice Evans','Maurice Evans fue un actor británico-estadoun','maurice_evans.jpg'),(38,'Roddy McDowall','Roddy McDowall fue un actor británico-estadou','roddy_mcdowall.jpg'),(39,'Ed Wynn','Ed Wynn fue un actor y comediante estadounide','ed_wynn.jpg'),(40,'Jerry Colonna','Jerry Colonna fue un comediante y actor estad','jerry_colonna.jpg'),(41,'Kathryn Beaumont','Kathryn Beaumont es una actriz británica cono','kathryn_beaumont.jpg'),(42,'Richard Haydn','Richard Haydn fue un actor británico conocido','richard_haydn.jpg'),(43,'Sterling Holloway','Sterling Holloway fue un actor y voz estadoun','sterling_holloway.jpg'),(44,'Al Pacino','Al Pacino es un actor y cineasta estadouniden','al_pacino.jpg'),(45,'Diane Keaton','Diane Keaton es una actriz, directora y produ','diane_keaton.jpg'),(46,'Robert De Niro','Robert De Niro es un actor, director y produc','robert_de_niro.jpg'),(47,'Audrey Hepburn','Audrey Hepburn fue una actriz británica-belga','audrey_hepburn.jpg'),(48,'Buddy Ebsen','Buddy Ebsen fue un actor, cantante y bailarín','buddy_ebsen.jpg'),(49,'George Peppard','George Peppard fue un actor estadounidense co','george_peppard.jpg'),(50,'John McGiver','John McGiver fue un actor estadounidense cono','john_mcgiver.jpg'),(51,'Jose de Vilallonga','Jose de Vilallonga fue un actor y aristócrata','jose_de_vilallonga.jpg'),(52,'Martin Balsam','Martin Balsam fue un actor estadounidense con','martin_balsam.jpg'),(53,'Mickey Rooney','Mickey Rooney fue un actor, productor y escri','mickey_rooney.jpg'),(54,'Patricia Neal','Patricia Neal fue una actriz estadounidense c','patricia_neal.jpg'),(55,'Stanley Adams','Stanley Adams fue un actor estadounidense con','stanley_adams.jpg'),(56,'Emilio Echevarría','Emilio Echevarría es un actor mexicano conoci','emilio_echevarria.jpg'),(57,'Gael García Bernal','Gael García Bernal es un actor y director mex','gael_garcia_bernal.jpg'),(58,'Gerardo Campbell','Gerardo Campbell es un actor mexicano conocid','gerardo_campbell.jpg'),(59,'Vanessa Bauche','Vanessa Bauche es una actriz mexicana conocid','vanessa_bauche.jpg'),(60,'Haya Harareet','Haya Harareet fue una actriz israelí conocida','haya_harareet.jpg'),(61,'Jack Hawkins','Jack Hawkins fue un actor británico conocido ','jack_hawkins.jpg'),(62,'Stephen Boyd','Stephen Boyd fue un actor irlandés conocido p','stephen_boyd.jpg'),(63,'Vivien Leigh','Vivien Leigh fue una actriz británica conocid','vivien_leigh.jpg'),(64,'Clark Gable','Clark Gable fue un actor estadounidense conoc','clark_gable.jpg'),(65,'Hattie McDaniel','Hattie McDaniel fue una actriz y cantante afr','hattie_mcdaniel.jpg'),(66,'Leslie Howard','Leslie Howard fue un actor británico conocido','leslie_howard.jpg'),(67,'Olivia de Havilland','Olivia de Havilland fue una actriz británico-','olivia_de_havilland.jpg'),(68,'Alain Cuny','Alain Cuny fue un actor francés conocido por ','alain_cuny.jpg'),(69,'Anita Ekberg','Anita Ekberg fue una actriz sueca conocida po','anita_ekberg.jpg'),(70,'Anouk Aimee','Anouk Aimée es una actriz francesa conocida p','anouk_aimee.jpg'),(71,'Marcello Mastroianni','Marcello Mastroianni fue un actor italiano co','marcello_mastroianni.jpg'),(72,'Yvonne Furneaux','Yvonne Furneaux es una actriz francesa conoci','yvonne_furneaux.jpg'),(73,'Minoru Chiaki','Minoru Chiaki fue un actor japonés conocido p','minoru_chiaki.jpg'),(74,'Seiji Miyaguchi','Seiji Miyaguchi fue un actor japonés conocido','seiji_miyaguchi.jpg'),(75,'Takashi Shimura','Takashi Shimura fue un actor japonés conocido','takashi_shimura.jpg'),(76,'Tochiro Mifune','Tochiro Mifune fue un actor japonés conocido ','tochiro_mifune.jpg'),(77,'Yoshio Inaba','Yoshio Inaba fue un actor japonés conocido po','yoshio_inaba.jpg'),(78,'Charles Chaplin','Charles Chaplin fue un actor, director y prod','charles_chaplin.jpg'),(79,'Chester Conklin','Chester Conklin fue un actor estadounidense c','chester_conklin.jpg'),(80,'Henry Bergman','Henry Bergman fue un actor estadounidense con','henry_bergman.jpg'),(81,'Paulette Goddard','Paulette Goddard fue una actriz estadounidens','paulette_goddard.jpg'),(82,'Stanley Standford','Stanley Standford fue un actor estadounidense','stanley_standford.jpg'),(83,'Claudia Cardinale','Claudia Cardinale es una actriz italiana cono','claudia_cardinale.jpg'),(84,'Jose Lewgoy','Jose Lewgoy fue un actor brasileño conocido p','jose_lewgoy.jpg'),(85,'Klaus Kinski','Klaus Kinski fue un actor alemán conocido por','klaus_kinski.jpg'),(86,'Miguel Angel Fuentes','Miguel Angel Fuentes fue un actor mexicano co','miguel_angel_fuentes.jpg'),(87,'Paul Hittscher','Paul Hittscher fue un actor estadounidense co','paul_hittscher.jpg'),(88,'Corinne Orr','Corinne Orr fue una actriz estadounidense con','corinne_orr.jpg'),(89,'Robert Spencer','Robert Spencer fue un actor estadounidense co','robert_spencer.jpg'),(90,'Shannon Conley','Shannon Conley es una actriz estadounidense c','shannon_conley.jpg'),(91,'Dakota Fanning','Dakota Fanning es una actriz estadounidense c','dakota_fanning.jpg'),(92,'Hitoshi Takagi','Hitoshi Takagi fue un actor japonés conocido ','hitoshi_takagi.jpg'),(93,'Noriko Hidaka','Noriko Hidaka es una actriz japonesa conocida','noriko_hidaka.jpg'),(94,'Shigesato Itoi','Shigesato Itoi es un escritor, actor y diseña','shigesato_itoi.jpg'),(95,'Kurtwood Smith','Kurtwood Smith es un actor estadounidense con','kurtwood_smith.jpg'),(96,'Miguel Ferrer','Miguel Ferrer fue un actor estadounidense con','miguel_ferrer.jpg'),(97,'Nancy Allen','Nancy Allen es una actriz estadounidense cono','nancy_allen.jpg'),(98,'Peter Weller','Peter Weller es un actor estadounidense conoc','peter_weller.jpg'),(99,'Ronny Cox','Ronny Cox es un actor estadounidense conocido','ronny_cox.jpg'),(100,'Dorothy Comingo','Dorothy Comingo fue una actriz estadounidense','dorothy_comingo.jpg'),(101,'Everett Sloane','Everett Sloane fue un actor estadounidense co','everett_sloane.jpg'),(102,'George Coulouris','George Coulouris fue un actor británico conoc','george_coulouris.jpg'),(103,'Joseph Cotten','Joseph Cotten fue un actor estadounidense con','joseph_cotten.jpg'),(104,'Orson Welles','Orson Welles fue un actor, director, guionist','orson_welles.jpg'),(105,'Henry Daniell','Henry Daniell fue un actor británico conocido','henry_daniell.jpg'),(106,'Jack Oakie','Jack Oakie fue un actor estadounidense conoci','jack_oakie.jpg'),(107,'Reginald Gardiner','Reginald Gardiner fue un actor británico cono','reginald_gardiner.jpg'),(108,'Daniel Richter','Daniel Richter fue un actor y coreógrafo esta','daniel_richter.jpg'),(109,'Gary Lockwood','Gary Lockwood es un actor estadounidense cono','gary_lockwood.jpg'),(110,'Keir Dullea','Keir Dullea es un actor estadounidense conoci','keir_dullea.jpg'),(111,'Leonard Rossiter','Leonard Rossiter fue un actor británico conoc','leonard_rossiter.jpg'),(112,'William Sylvester','William Sylvester fue un actor estadounidense','william_sylvester.jpg'),(113,'Anthony Edwards','Anthony Edwards es un actor estadounidense co','anthony_edwards.jpg'),(114,'Kelly McGillis','Kelly McGillis es una actriz estadounidense c','kelly_mcgillis.jpg'),(115,'Tom Cruise','Tom Cruise es un actor estadounidense conocid','tom_cruise.jpg'),(116,'Tom Skerritt','Tom Skerritt es un actor estadounidense conoc','tom_skerritt.jpg'),(117,'Val Kilmer','Val Kilmer es un actor estadounidense conocid','val_kilmer.jpg'),(118,'Adam Baldwin','Adam Baldwin es un actor estadounidense conoc','adam_baldwin.jpg'),(119,'Arliss Howard','Arliss Howard es un actor estadounidense cono','arliss_howard.jpg'),(120,'Dorian Harewood','Dorian Harewood es un actor estadounidense co','dorian_harewood.jpg'),(121,'Matthew Modine','Matthew Modine es un actor estadounidense con','matthew_modine.jpg'),(122,'R Lee Ermey','R Lee Ermey fue un actor estadounidense conoc','r_lee_ermey.jpg'),(123,'Vincent D Onofrio','Vincent D Onofrio es un actor estadounidense ','vincent_d_onofrio.jpg'),(124,'Noah Hathaway','Noah Hathaway es un actor estadounidense cono',NULL),(125,'Barret Oliver','Barret Oliver es un actor y fotógrafo estadou',NULL),(126,'Gerald McRaney','Gerald McRaney es un actor estadounidense con',NULL),(127,'Tami Stronach','Tami Stronach es una bailarina y actriz estad',NULL),(128,'Mary Steenburgen','Mary Steenburgen es una actriz estadounidense',NULL),(129,'Gloria Stuart','Gloria Stuart fue una actriz estadounidense c',NULL),(130,'Kathy Bates','Kathy Bates es una aclamada actriz estadounid',NULL),(131,'Leonardo DiCaprio','Leonardo DiCaprio es un actor estadounidense ',NULL),(132,'Billy Zane','Billy Zane es un actor estadounidense conocid',NULL),(133,'Faye Dunaway','Faye Dunaway es una actriz estadounidense icó',NULL),(134,'Kim Novak','Kim Novak es una actriz estadounidense y exmo',NULL),(135,'Richard Beymer','Richard Beymer es un actor estadounidense con',NULL);
/*!40000 ALTER TABLE `actors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `actors_movies`
--

DROP TABLE IF EXISTS `actors_movies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `actors_movies` (
  `id` int(11) NOT NULL,
  `Actors_id` int(11) NOT NULL,
  `Movies_id` int(11) NOT NULL,
  PRIMARY KEY (`Actors_id`,`Movies_id`,`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_Actors_has_Movies_Movies1_idx` (`Movies_id`),
  KEY `fk_Actors_has_Movies_Actors1_idx` (`Actors_id`),
  CONSTRAINT `fk_Actors_has_Movies_Actors1` FOREIGN KEY (`Actors_id`) REFERENCES `actors` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Actors_has_Movies_Movies1` FOREIGN KEY (`Movies_id`) REFERENCES `movies` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `actors_movies`
--

LOCK TABLES `actors_movies` WRITE;
/*!40000 ALTER TABLE `actors_movies` DISABLE KEYS */;
INSERT INTO `actors_movies` VALUES (80,1,18),(1,1,95),(2,2,95),(3,3,95),(4,4,95),(5,5,96),(6,6,96),(7,7,96),(8,8,96),(9,9,97),(10,10,97),(11,11,97),(12,12,97),(13,13,98),(14,14,98),(15,15,98),(16,16,98),(137,17,30),(17,17,99),(109,18,24),(18,18,99),(19,19,99),(139,20,30),(20,20,99),(21,21,100),(22,22,100),(23,23,100),(24,24,100),(25,25,101),(26,26,101),(27,27,101),(28,28,101),(29,29,102),(30,30,102),(31,31,102),(46,32,11),(106,32,23),(32,32,102),(33,33,102),(61,34,14),(34,34,103),(35,35,103),(36,36,103),(37,37,103),(38,38,103),(39,39,104),(40,40,104),(41,41,104),(42,42,104),(43,43,104),(44,44,11),(45,45,11),(47,46,11),(48,47,12),(49,48,12),(50,49,12),(51,50,12),(52,51,12),(53,52,12),(54,53,12),(55,54,12),(56,55,12),(57,56,13),(58,57,13),(59,58,13),(60,59,13),(62,60,14),(63,61,14),(64,62,14),(65,63,15),(66,64,15),(67,65,15),(68,66,15),(69,67,15),(70,68,16),(71,69,16),(72,70,16),(73,71,16),(74,72,16),(75,73,17),(76,74,17),(77,75,17),(78,76,17),(79,77,17),(81,78,18),(82,79,18),(83,80,18),(110,80,24),(84,81,18),(85,82,19),(86,83,19),(87,84,19),(88,85,19),(89,86,19),(90,87,20),(91,88,20),(92,89,20),(93,90,21),(94,91,21),(95,92,21),(96,93,21),(97,94,22),(98,95,22),(99,96,22),(100,97,22),(101,98,22),(102,99,23),(103,100,23),(104,101,23),(105,102,23),(107,103,24),(108,104,24),(111,105,24),(112,106,25),(113,107,25),(114,108,25),(115,109,25),(116,110,25),(117,111,26),(118,112,26),(119,113,26),(120,114,26),(121,115,26),(122,116,27),(123,117,27),(124,118,27),(127,118,28),(125,119,27),(128,119,28),(126,120,27),(129,120,28),(130,121,28),(131,122,28),(132,123,28),(133,124,29),(134,125,29),(135,126,29),(136,127,29),(138,128,30),(140,129,31),(141,130,31),(142,131,31),(143,132,31),(144,133,32);
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
  `name_URL` varchar(45) DEFAULT NULL,
  `Movies_id` int(11) NOT NULL,
  `image_type_id` int(11) NOT NULL,
  PRIMARY KEY (`id`,`Movies_id`,`image_type_id`),
  KEY `fk_Images_Movies1_idx` (`Movies_id`),
  KEY `fk_Images_image_type1_idx` (`image_type_id`),
  CONSTRAINT `fk_Images_Movies1` FOREIGN KEY (`Movies_id`) REFERENCES `movies` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Images_image_type1` FOREIGN KEY (`image_type_id`) REFERENCES `image_type` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=106 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'El-padrino/El-Padrino-02.webp',11,1),(2,'El-Padrino/padrino1.jpeg',11,2),(3,'El-Padrino/padrino2.jpeg',11,2),(4,'El-Padrino/padrino3.jpeg',11,2),(5,'El-Padrino/padrino4.jpeg',11,2),(6,'BATiff/BAT_poster.jpeg',12,1),(7,'BATiff/BT-img1.jpeg',12,2),(8,'BATiff/BT-img2.jpeg',12,2),(9,'BATiff/BT-img3.jpeg',12,2),(10,'BATiff/BT-img4.jpeg',12,2),(11,'Amores-Perros/amores-perros-01.jpg',13,1),(12,'Amores-Perros/Amores-Perros-02.jpg',13,2),(13,'Amores-Perros/Amores -Perros-03.jpg',13,2),(14,'Amores-Perros/Amores-Perros-04.jpg',13,2),(15,'Amores-Perros/Amores-Perros-05.webp',13,2),(16,'Ben-Hur/Ben-Hur_01.webp',14,1),(17,'Ben-Hur/ben-hur5.jpeg',14,2),(18,'Ben-Hur/Ben-Hur_02.jpg',14,2),(19,'Ben-Hur/Ben-Hur_03.jpg',14,2),(20,'Ben-Hur/Ben-Hur_04.jpeg',14,2),(21,'LoQueElVientoSeLlevo/LoQueElVientoSeLlevo.jpe',15,1),(22,'LoQueElVientoSeLlevo/loqueElViento1.jpeg',15,2),(23,'LoQueElVientoSeLlevo/loqueElviento2.jpeg',15,2),(24,'LoQueElVientoSeLlevo/loqueElViento3.jpeg',15,2),(25,'LoQueElVientoSeLlevo/loqueElViento4.jpeg',15,2),(26,'LaDolceVita/LaDolceVita-poster.jpeg',16,1),(27,'LaDolceVita/ladolce1.jpeg',16,2),(28,'LaDolceVita/ladolce2.jpeg',16,2),(29,'LaDolceVita/ladolce3.jpeg',16,2),(30,'LaDolceVita/ladolce4.jpeg',16,2),(31,'Seven Samurai/Seven_Samurai_poster.jpg',17,1),(32,'Seven Samurai/sietesamurai1.jpeg',17,2),(33,'Seven Samurai/sietesamurai2.jpeg',17,2),(34,'Seven Samurai/sietesamurai3.jpeg',17,2),(35,'Seven Samurai/sietesamurai4.jpeg',17,2),(36,'tiemposModernos/tiempos_modernos.jpg',18,1),(37,'tiemposModernos/tiemposmodernos1.jpeg',18,2),(38,'tiemposModernos/tiemposmodernos2.jpeg',18,2),(39,'tiemposModernos/tiemposmodernos3.jpeg',18,2),(40,'tiemposModernos/tiemposmodernos4.jpeg',18,2),(41,'Fitzcarraldo/fitzcarraldo.jpg',19,1),(42,'Fitzcarraldo/fitzcarraldo1.jpg',19,2),(43,'Fitzcarraldo/fitzcarraldo2.jpg',19,2),(44,'Fitzcarraldo/fitzcarraldo3.jpg',19,2),(45,'Fitzcarraldo/fitzcarraldo4.jpg',19,2),(46,'LaTumbaDeLasLuciernagas/grave_of_the_fireflie',20,1),(47,'LaTumbaDeLasLuciernagas/grave_of_the_fireflie',20,2),(48,'LaTumbaDeLasLuciernagas/grave_of_the_fireflie',20,2),(49,'LaTumbaDeLasLuciernagas/grave_of_the_fireflie',20,2),(50,'LaTumbaDeLasLuciernagas/grave_of_the_fireflie',20,2),(51,'MiVecinoTororo/mi_vecino_tororo.jpg',21,1),(52,'MiVecinoTororo/mi_vecino_tororo1.jpg',21,2),(53,'MiVecinoTororo/mi_vecino_tororo2.jpg',21,2),(54,'MiVecinoTororo/mi_vecino_tororo3.jpg',21,2),(55,'MiVecinoTororo/mi_vecino_tororo4.jpg',21,2),(56,'Robocop/robocop.jpg',22,1),(57,'Robocop/robocop1.jpg',22,2),(58,'Robocop/robocop2.jpg',22,2),(59,'Robocop/robocop3.jpg',22,2),(60,'Robocop/robocop4.jpg',22,2),(61,'ciudadanoKane/citizen_kane-Poster.jpeg',23,1),(62,'ciudadanoKane/CiudadanoKane1.jpeg',23,2),(63,'ciudadanoKane/ciudadanoKane2.jpeg',23,2),(64,'ciudadanoKane/ciudadanoKane3.png',23,2),(65,'ciudadanoKane/ciudadanoKane4.jpeg',23,2),(66,'ElGranDictador/the_great_dictator-Poster.jpeg',24,1),(67,'ElGranDictador/Dictator1.jpeg',24,2),(68,'ElGranDictador/Dictator2.jpeg',24,2),(69,'ElGranDictador/Dictator3.jpeg',24,2),(70,'ElGranDictador/Dictator4.jpeg',24,2),(71,'odiseaEnElEspacio/spaceOdyssey-Poster.jpeg',25,1),(72,'odiseaEnElEspacio/odisea1.jpeg',25,2),(73,'odiseaEnElEspacio/odisea2.jpeg',25,2),(74,'odiseaEnElEspacio/odisea3.jpeg',25,2),(75,'odiseaEnElEspacio/odisea4.jpeg',25,2),(76,'topGun/top_gun-Poster.jpeg',26,1),(77,'topGun/topGun1.jpeg',26,2),(78,'topGun/topGun2.jpeg',26,2),(79,'topGun/topGun3.jpeg',26,2),(80,'topGun/topGun4.jpeg',26,2),(81,'Amanecer/Amanecer-poster.jpeg',27,1),(82,'Amanecer/amanecer1.jpeg',27,2),(83,'Amanecer/amanecer2.jpeg',27,2),(84,'Amanecer/amanecer3.jpeg',27,2),(85,'Amanecer/amanecer4.jpeg',27,2),(86,'laChaquetaMetalica/full_metal_jacket-Poster.j',28,1),(87,'laChaquetaMetalica/metalJacket1.jpeg',28,2),(88,'laChaquetaMetalica/metalJacket2.jpeg',28,2),(89,'laChaquetaMetalica/metalJacket3.jpeg',28,2),(90,'laChaquetaMetalica/metalJacket4.jpeg',28,2),(91,'La-Historia-Interminable/La_Historia_Intermin',29,1),(92,'La-Historia-Interminable/historiaInt5.jpeg',29,2),(93,'La-Historia-Interminable/La_Historia_Intermin',29,2),(94,'La-Historia-Interminable/La_Historia_Intermin',29,2),(95,'La-Historia-Interminable/La_Historia_Intermin',29,2),(96,'BTTF3/BTTF34.jpg',30,1),(97,'BTTF3/BTTF3.avif',30,2),(98,'BTTF3/BTTF32.webp',30,2),(99,'BTTF3/BTTF33.jfif',30,2),(100,'BTTF3/BTTF34.jpg',30,2),(101,'starwars/star wars.webp',31,1),(102,'starwars/starwars1.jpeg',31,2),(103,'starwars/starwars2.jpeg',31,2),(104,'starwars/starwars3.jpeg',31,2),(105,'starwars/starwars4.jpeg',31,2);
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
  `images` varchar(1000) DEFAULT NULL,
  `top_movie` tinyint(1) DEFAULT NULL,
  `is_carrousell` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=105 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies`
--

LOCK TABLES `movies` WRITE;
/*!40000 ALTER TABLE `movies` DISABLE KEYS */;
INSERT INTO `movies` VALUES (11,'El Padrino',175,1972,6,'América, años 40. Don Vito Corleone (Marlon Brando) es el respetado y temido jefe de una de las cinco familias de la mafia de Nueva York. Tiene cuatro hijos: Connie (Talia Shire), el impulsivo Sonny (James Caan), el pusilánime Fredo (John Cazale) y Michael (Al Pacino), que no quiere saber nada de los negocios de su padre. Cuando Corleone, en contra de los consejos de Il consigliere Tom Hagen (Robert Duvall), se niega a participar en el negocio de las drogas, el jefe de otra banda ordena su asesinato. Empieza entonces una violenta y cruenta guerra entre las familias mafiosas.','[\"El-padrino/El-Padrino-02.webp\", \"El-Padrino/padrino1.jpeg\", \"El-Padrino/padrino2.jpeg\", \"El-Padrino/padrino3.jpeg\", \"El-Padrino/padrino4.jpeg\"]',0,0),(12,'Breakfast at Tiffany\'s',115,1961,3,'Holly Golightly es una bella joven neoyorquina que, aparentemente, lleva una vida fácil y alegre. Tiene un comportamiento bastante extravagante, por ejemplo, desayunar contemplando el escaparate de la lujosa joyería Tiffanys. Un día se muda a su mismo edificio Paul Varjak, un escritor que, mientras espera un éxito que nunca llega, vive a costa de una mujer madura.','[\"BATiff/BAT_poster.jpeg\",\"BATiff/BT-img1.jpeg\",\"BATiff/BT-img2.jpeg\",\"BATiff/BT-img3.jpeg\",\"BATiff/BT-img4.jpeg\"]',0,0),(13,'Amores Perros',154,2000,4,'Octavio, un joven adolescente enamorado de su cuñada, ha transformado a su perro Cofi en una mortífera arma con la que desea escapar de su miseria amorosa.','[\"Amores-Perros/amores-perros-01.jpg\", \"Amores-Perros/Amores-Perros-02.jpg\", \"Amores-Perros/Amores -Perros-03.jpg\", \"Amores-Perros/Amores-Perros-04.jpg\", \"Amores-Perros/Amores-Perros-05.webp\"]',0,0),(14,'Ben-Hur',212,1959,5,'Antigua Roma, bajo el reinado de los emperadores Augusto y Tiberio (s. I d.C.). Judá Ben-Hur (Charlton Heston), hijo de una familia noble de Jerusalén, y Mesala (Stephen Boyd), tribuno romano que dirige los ejércitos de ocupación, son dos antiguos amigos, pero un accidente involuntario los convierte en enemigos irreconciliables: Ben-Hur es acusado de atentar contra la vida del nuevo gobernador romano, y Mesala lo encarcela a él y a su familia. Mientras Ben-Hur es trasladado a galeras para cumplir su condena, un hombre llamado Jesús de Nazaret se apiada de él y le da de beber. En galeras conocerá al comandante de la nave (Jack Hawkins) y más tarde a un jeque árabe (Hugh Griffith) que participa con sus magníficos caballos en carreras de cuadrigas.','[\"Ben-Hur/Ben-Hur_01.webp\", \"Ben-Hur/ben-hur5.jpeg\", \"Ben-Hur/Ben-Hur_02.jpg\", \"Ben-Hur/Ben-Hur_03.jpg\", \"Ben-Hur/Ben-Hur_04.jpeg\"]',0,0),(15,'Lo que el viento se llevó',238,1939,5,'Georgia, 1861. En la elegante mansión sureña de Tara, vive Scarlett O\'Hara (Vivien Leigh), la joven más bella, caprichosa y egoísta de la región. Ella suspira por el amor de Ashley (Leslie Howard), pero él está prometido con su prima, la dulce y bondadosa Melanie (Olivia de Havilland). En la última fiesta antes del estallido de la Guerra de Secesión (1861-1865), Scarlett conoce al cínico y apuesto Rhett Butler (Clark Gable), un vividor arrogante y aventurero, que sólo piensa en sí mismo y que no tiene ninguna intención de participar en la contienda. Lo único que él desea es hacerse rico y conquistar el corazón de la hermosa Scarlett.','[\"LoQueElVientoSeLlevo/LoQueElVientoSeLlevo.jpeg\", \"LoQueElVientoSeLlevo/loqueElViento1.jpeg\", \"LoQueElVientoSeLlevo/loqueElviento2.jpeg\", \"LoQueElVientoSeLlevo/loqueElViento3.jpeg\", \"LoQueElVientoSeL',0,0),(16,'La Dolce Vita',174,1960,4,'Marcello Rubini es un desencantado periodista romano, en busca de celebridades, que se mueve con insatisfacción por las fiestas nocturnas que celebra la burguesía de la época. Merodea por distintos lugares de Roma, siempre rodeado de todo tipo de personajes, especialmente de la élite de la sociedad italiana. En una de sus salidas se entera de que Sylvia, una célebre diva del mundo del cine, llega a Roma, cree que ésta es una gran oportunidad para conseguir una gran noticia, y, en consecuencia, la perseguirá por las noches por diferentes lugares de la ciudad.','[\"LaDolceVita/LaDolceVita-poster.jpeg\", \"LaDolceVita/ladolce1.jpeg\", \"LaDolceVita/ladolce2.jpeg\", \"LaDolceVita/ladolce3.jpeg\", \"LaDolceVita/ladolce4.jpeg\"]',0,0),(17,'Seven Samurai',207,1954,6,'Japón, Siglo XVI. Una aldea de campesinos indefensos es repetidamente atacada y saqueada por una banda de forajidos. Aconsejados por el anciano de la aldea, unos aldeanos acuden a la ciudad con el objetivo de contratar a un grupo de samuráis para protegerlos. A pesar de que el único salario es comida y techo, varios samuráis se van incorporando uno a uno al singular grupo que finalmente se dirige a la aldea.','[\"Seven Samurai/Seven_Samurai_poster.jpg\", \"Seven Samurai/sietesamurai1.jpeg\", \"Seven Samurai/sietesamurai2.jpeg\", \"Seven Samurai/sietesamurai3.jpeg\", \"Seven Samurai/sietesamurai4.jpeg\"]',0,0),(18,'Tiempos Modernos',87,1936,4,'Extenuado por el frenético ritmo de la cadena de montaje, un obrero metalúrgico acaba perdiendo la razón. Después de recuperarse en un hospital, sale y es encarcelado por participar en una manifestación en la que se encontraba por casualidad. En la cárcel, también sin pretenderlo, ayuda a controlar un motín, gracias a lo cual queda en libertad. Una vez fuera, reemprende la lucha por la supervivencia en compañía de una joven huérfana a la que conoce en la calle.','[\"tiemposModernos/tiempos_modernos.jpg\", \"tiemposModernos/tiemposmodernos1.jpeg\", \"tiemposModernos/tiemposmodernos2.jpeg\", \"tiemposModernos/tiemposmodernos3.jpeg\", \"tiemposModernos/tiemposmodernos4.jp',0,0),(19,'Fitzcarraldo',158,1982,5,'Brian Sweeney Fitzgerald, más conocido como Fitzcarraldo, es un hombre obsesionado por la ópera. Harto de la incompetencia de los empresarios discográficos de Perú, decide financiar una lujosa puesta en escena de \"El anillo del nibelungo\" de Wagner con sus propios medios. Para ello, Fitzcarraldo pretende explotar un yacimiento de caucho inaccesible situado en las profundidades de la selva peruana. Convencido de que está predestinado para llevar a cabo esta hazaña, Fitzcarraldo se embarca en una aventura sin precedentes: hacer rodar un barco de vapor de más de 300 toneladas por una montaña y a través de una empinada pendiente.','[\"fitzcarraldo/fitzcarraldo_poster.jpeg\", \"fitzcarraldo/fitzcarraldo1.jpeg\", \"fitzcarraldo/fitzcarraldo2.jpeg\", \"fitzcarraldo/fitzcarraldo3.jpeg\", \"fitzcarraldo/fitzcarraldo4.jpeg\"]',0,0),(20,'El viaje de Chihiro',125,2001,6,'Chihiro es una niña de diez años que viaja en coche con sus padres. Después de atravesar un túnel, llegan a un mundo fantástico, en el que no hay lugar para los seres humanos, sólo para los dioses de primera y segunda clase. Cuando descubre que sus padres han sido convertidos en cerdos, Chihiro se siente muy sola y asustada. ','[\"elViajeDeChihiro/el-viaje-de-chihiro.jpg\", \"elViajeDeChihiro/viajechihiro1.jpeg\", \"elViajeDeChihiro/viajechihiro2.jpeg\", \"elViajeDeChihiro/viajechihiro3.jpeg\", \"elViajeDeChihiro/viajechihiro4.jpeg\"]',0,0),(21,'Mi Vecino Totoro',86,1988,4,'En los años 50, una familia japonesa se traslada al campo. Las dos hijas, Satsuki y Mei, entablan amistad con Totoro, un espíritu del bosque. El padre es un profesor universitario que estimula la imaginación de sus hijas relatándoles fábulas e historias mágicas sobre duendes, fantasmas y espíritus protectores de los hogares, mientras la madre se encuentra enferma en el hospital.','[\"MiVecinoTororo/mi_vecino_tororo.jpg\",\"MiVecinoTororo/mi_vecino_tororo1.jpg\",\"MiVecinoTororo/mi_vecino_tororo2.jpg\",\"MiVecinoTororo/mi_vecino_tororo3.jpg\",\"MiVecinoTororo/mi_vecino_tororo4.jpg\",\"Dakota Fanning\",\"Hitoshi Takagi\",\"Noriko Hidaka\",\"Shigesato Itoi\"]',0,0),(22,'Robocop',102,1987,5,'Ambientada en una sociedad futura. Alex J. Murphy, agente de policía de Detroit, es asesinado en acto de servicio. Para acabar con la delincuencia en la ciudad, las autoridades aprueban la creación de una máquina letal, mitad robot, mitad hombre, a la que llaman Robocop, y para fabricarla utilizan el cuerpo de Murphy. El experimento parece un éxito, pero el policía, a pesar de estar muerto, conserva la memoria y decide vengarse de sus asesinos.','[\"Robocop/robocop.jpg\",\"Robocop/robocop1.jpg\",\"Robocop/robocop2.jpg\",\"Robocop/robocop3.jpg\",\"Robocop/robocop4.jpg\",\"Kurtwood Smith\",\"Miguel Ferrer\",\"Nancy Allen\",\"Peter Weller\",\"Ronny Cox\"]',0,0),(23,'Ciudadano Kane',119,1961,4,'Un importante magnate estadounidense, Charles Foster Kane, dueño de una importante cadena de periódicos, de una red de emisoras, de dos sindicatos y de una inimaginable colección de obras de arte, muere en Xanadú, su fabuloso castillo de estilo oriental. La última palabra que pronuncia antes de expirar, \"Rosebud\", cuyo significado es un enigma, despierta una enorme curiosidad tanto en la prensa como entre la población. Así, un grupo de periodistas emprende una investigación para desentrañar el misterio.','[\"ciudadanoKane/citizen_kane-Poster.jpeg\",\"ciudadanoKane/CiudadanoKane1.jpeg\",\"ciudadanoKane/ciudadanoKane2.jpeg\",\"ciudadanoKane/ciudadanoKane3.png\",\"ciudadanoKane/ciudadanoKane4.jpeg\",\"Dorothy Comingo\",\"Everett Sloane\",\"George Coulouris\",\"Joseph Cotten\",\"Orson Welles\"]',0,0),(24,'El Gran Dictador',125,1940,4,'Un humilde barbero judío que combatió con el ejército de Tomania en la Primera Guerra Mundial vuelve a su casa años después del fin del conflicto. Amnésico a causa de un accidente de avión, no recuerda prácticamente nada de su vida pasada, y no conoce la situación política actual del país: Adenoid Hynkel, un dictador fascista y racista, ha llegado al poder y ha iniciado la persecución del pueblo judío, a quien considera responsable de la situación de crisis que vive el país. Paralelamente, Hynkel y sus colaboradores han empezado a preparar una ofensiva militar destinada a la conquista de todo el mundo.','[\"ElGranDictador/the_great_dictator-Poster.jpeg\",\"ElGranDictador/Dictator1.jpeg\",\"ElGranDictador/Dictator2.jpeg\",\"ElGranDictador/Dictator3.jpeg\",\"ElGranDictador/Dictator4.jpeg\",\"Henry Daniell\",\"Jack Oakie\",\"Charles Chaplin\",\"Paulette Goddard\",\"Reginald Gardiner\"]',0,0),(25,'2001: A Space Odyssey',149,1968,6,'La película de ciencia-ficción por excelencia de la historia del cine narra los diversos periodos de la historia de la humanidad, no sólo del pasado, sino también del futuro. Hace millones de años, antes de la aparición del homo sapiens, unos primates descubren un monolito que los conduce a un estadio de inteligencia superior. Millones de años después, otro monolito, enterrado en una luna, despierta el interés de los científicos. Por último, durante una misión de la NASA, HAL 9000, una máquina dotada de inteligencia artificial, se encarga de controlar todos los sistemas de una nave espacial tripulada.','[\"odiseaEnElEspacio/spaceOdyssey-Poster.jpeg\",\"odiseaEnElEspacio/odisea1.jpeg\",\"odiseaEnElEspacio/odisea2.jpeg\",\"odiseaEnElEspacio/odisea3.jpeg\",\"odiseaEnElEspacio/odisea4.jpeg\",\"Daniel Richter\",\"Gary Lockwood\",\"Keir Dullea\",\"Leonard Rossiter\",\"William Sylvester\"]',0,0),(26,'Top Gun',110,1986,21,'La Marina de los Estados Unidos ha creado una escuela de élite para pilotos con el fin de sacar una promoción de expertos en técnicas de combate. En la academia, más conocida como Top Gun, a los mejores se les entrena para ser intrépidos y fríos al mismo tiempo, capaces de no perder los nervios en situaciones extremas y de no inmutarse al romper la barrera del sonido a los mandos de un F-14. A la escuela llega el joven Maverick, famoso por su temeraria aunque brillante forma de pilotar.','[\"topGun/top_gun-Poster.jpeg\",\"topGun/topGun1.jpeg\",\"topGun/topGun2.jpeg\",\"topGun/topGun3.jpeg\",\"topGun/topGun4.jpeg\",\"Anthony Edwards\",\"Kelly McGillis\",\"Tom Cruise\",\"Tom Skerritt\",\"Val Kilmer\"]',0,0),(27,'Amanecer',94,1927,9,'Un granjero (George O\'Brien) convive felizmente en el campo con su esposa (Janet Gaynor). Pero la aparición de una seductora mujer (Margaret Livingston) de la ciudad hace que comience a enamorarse de ésta, y a pensar que su mujer es un estorbo que se interpone en la felicidad entre él y su nueva y sofisticada amante.','[\"Amanecer/Amanecer-poster.jpeg\",\"Amanecer/amanecer1.jpeg\",\"Amanecer/amanecer2.jpeg\",\"Amanecer/amanecer3.jpeg\",\"Amanecer/amanecer4.jpeg\",\"George Obrien\",\"Janet Gaynor\",\"Margaret Livingston\",\"Bodil Rosing\",\"J. Farrell McDonald\"]',0,0),(28,'La chaqueta metalica',116,1987,17,'Un grupo de reclutas se prepara en Parris Island, centro de entrenamiento de la marina norteamericana. Están bajo las órdenes del sargento Hartman, duro e implacable, cuya única misión en la vida es endurecer el cuerpo y el alma de los novatos, con el objetivo de que en el futuro puedan defenderse del enemigo. Pero no todos los jóvenes están preparados para soportar sus métodos.','[\"laChaquetaMetalica/full_metal_jacket-Poster.jpeg\",\"laChaquetaMetalica/metalJacket1.jpeg\",\"laChaquetaMetalica/metalJacket2.jpeg\",\"laChaquetaMetalica/metalJacket3.jpeg\",\"laChaquetaMetalica/metalJacket4.jpeg\",\"Adam Baldwin\",\"Arliss Howard\",\"Dorian Harewood\",\"Matthew Modine\",\"R Lee Ermey\",\"Vincent D Onofrio\"]',0,0),(29,'La Historia Interminable',102,1984,19,'Un niño que pasa por un gran dolor descubre un mundo fantástico que está en peligro a través de un libro misterioso, que lo llevará a un gran viaje para enfrentar sus miedos.','[\"La-Historia-Interminable/La_Historia_Interminable_01.webp\",\"La-Historia-Interminable/historiaInt5.jpeg\",\"La-Historia-Interminable/La_Historia_Interminable_02.webp\",\"La-Historia-Interminable/La_Historia_Interminable_03.jpg\",\"La-Historia-Interminable/La_Historia_Interminable_04.jpeg\",[\"Noah Hathaway\",\"Barret Oliver\",\"Gerald McRaney\",\"Tami Stronach\"]',1,0),(30,'Back To The Future III',121,1990,6,'Retoma la historia justo después de los eventos de la segunda película, con Marty McFly descubriendo una carta de su amigo, el Dr. Emmett Doc Brown, que fue escrita en 1885. La carta revela que Doc está atrapado en el Viejo Oeste después de haber sido enviado accidentalmente allí por una falla en la máquina del tiempo.','[\"BTTF3/BTTF34.jpg\",\"BTTF3/BTTF3.avif\",\"BTTF3/BTTF32.webp\",\"BTTF3/BTTF33.jfif\",\"BTTF3/BTTF34.jpg\",\"Christopher Lloyd\",\"Mary Steen Burguen\",\"Kathleen Thompson\",\"Michael Fox\"]',1,0),(31,'Star Wars',118,1977,6,'La princesa Leia, líder del movimiento rebelde que desea reinstaurar la República en la galaxia en los tiempos ominosos del Imperio, es capturada por las Fuerzas Imperiales, capitaneadas por el implacable Darth Vader, el sirviente más fiel del Emperador. El intrépido y joven Luke Skywalker, ayudado por Han Solo, capitán de la nave espacial El Halcón Milenario, y los androides, R2D2 y C3PO, serán los encargados de luchar contra el enemigo e intentar rescatar a la princesa para volver a instaurar la justicia en el seno de la galaxia.','[\"starwars/star wars.webp\",\"starwars/starwars1.jpeg\",\"starwars/starwars2.jpeg\",\"starwars/starwars3.jpeg\",\"starwars/starwars4.jpeg\",\"Alec Guinness\",\"Carrie Fisher\",\"Harrison Ford\",\"Mark Hamill\",\"Peter Cushing\"]',1,0),(32,'Dune',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(95,'El bueno, el feo y el malo',178,1962,6,'Tres hombres violentos pelean por una caja que alberga 200 000 dólares, la cual fue escondida durante la Guerra Civil. Dado que ninguno puede encontrar la tumba donde está el botín sin la ayuda de los otros dos, deben colaborar, pese a odiarse.','[\"El-Bueno-El-Malo-El-Feo/El_bueno_el_feo_y_el_malo_01.jpg\", \"El-Bueno-El-Malo-El-Feo/El_bueno_el_malo_el_feo_02.jpg\", \"El-Bueno-El-Malo-El-Feo/El_bueno_el_malo_el_feo_03.webp\", \"El-Bueno-El-Malo-El-Feo/El_bueno_el_malo_el_feo_04.jpg\"]',0,1),(96,'El Mago de Oz',102,1939,6,'Una joven llamada Dorothy Gale, quien es llevada por un tornado desde su hogar en Kansas hasta la tierra mágica de Oz. En su viaje para encontrar al Mago de Oz y regresar a casa, Dorothy se une a un espantapájaros, un hombre de hojalata y un león cobarde. Juntos, enfrentan varios desafíos y adversidades mientras buscan la ayuda del Mago para cumplir sus deseos.','[\"ElMagoDeOz/mago de oz.jpg\", \"magoDeOz(reparto).jfif\", \"magoDeOz(reparto)3.jfif\", \"magoDeOz(reparto)2.jfif\", \"magoDeOz(reparto)4.jfif\"]',0,1),(97,'Frankestein',70,1931,6,'El Dr. Henry Frankenstein, un joven y apasionado científico, asistido por el jorobado Fritz, crea un cuerpo humano, cuyas partes han sido recolectadas secretamente y de varias fuentes. El anhelo que consume al doctor es el de crear vida humana a través de varios artefactos eléctricos perfeccionados por él mismo.','[\"Frankestein/frankenstein.jpg\", \"Frankestein/Frankestein.webp\", \"Frankestein/Frankestein2.webp\", \"Frankestein/Frankestein3.jfif\", \"Frankestein/Frankestein4.webp\"]',0,1),(98,'Grease',110,1978,6,'El rebelde Danny Zuko y la inocente australiana Sandy mantienen un romance durante las vacaciones, creyendo que no se volverán a ver; sin embargo, para sorpresa de ambos, se reencuentran en la escuela secundaria al empezar el nuevo curso.','[\"Grease/Grease.jpg\", \"Grease/Grease.jfif\", \"Grease/Grease1.avif\", \"Grease/Grease3.webp\", \"Grease/Grease4.webp\"]',0,1),(99,'Back To The Future',116,1985,6,'Marty McFly un adolescente que accidentalmente viaja en el tiempo desde 1985 hasta 1955 en un DeLorean modificado por su amigo científico, el Dr. Emmett Doc Brown,  Marty se encuentra con versiones más jóvenes de sus padres y debe asegurarse de que se enamoren para garantizar su propia existencia en el futuro. Mientras intenta encontrar una forma de regresar a su propio tiempo, Marty también debe lidiar con una serie de eventos que podrían alterar el curso de la historia, incluyendo ayudar a un joven Doc Brown a inventar la máquina del tiempo.','[\"BackToTheFuture/back-to-the-future.jpg\", \"BackToTheFuture/BackToTheFuture.jpg\", \"BackToTheFuture/BackToTheFuture2.jpg\", \"BackToTheFuture/BackToTheFuture3.jwebp\", \"BackToTheFuture/BackToTheFuture4.jpg\"]',0,1),(100,'Casa Blanca',102,1942,6,'En Marruecos, el dueño de un café ayuda a su ex novia y a su marido a escapar de los nazis.','[\"CasaBlanca/Casablanca copy.jpg\", \"CasaBlanca/Casablanca.jpg\", \"CasaBlanca/Casablanca1.webp\", \"CasaBlanca/Casablanca2.webp\", \"CasaBlanca/Casablanca3.jpg\"]',0,1),(101,'It',192,1990,6,'Un tranquilo y pequeño pueblo de Maine está siendo aterrorizado por una fuerza malévola oculta tras la máscara de un payaso, y que tan sólo se la conoce como It. Tras sus primeras víctimas, una pandilla formada por siete amigos de la infancia dedicen volver a reunirse para atacar el mal y destruirlo, intentando librar así del terror a su pueblo natal.','[\"Payasoit/IT.jpeg\", \"Payasoit/it1.jpg\", \"Payasoit/it2.webp\", \"Payasoit/it4.jpg\", \"Payasoit/it3.jpg\"]',0,1),(102,'Superman',143,1978,6,'Desde una galaxia remota, un recién nacido es enviado por sus padres al espacio debido a la inminente destrucción del planeta donde viven. La nave aterriza en la Tierra, y el niño es adoptado por unos granjeros que le inculcan los mejores valores humanos. Con los años, el joven se irá a Metrópolis y allí usará sus poderes sobrenaturales para luchar contra el mal.','[\"Superman/superman.jpg\", \"Superman/superman1.jpg\", \"Superman/superman2.jpg\", \"Superman/superman3.jpg\", \"Superman/superman4.jpg\"]',0,1),(103,'El planeta de los simios',112,1968,6,'George Taylor es un astronauta que forma parte de la tripulación de una nave espacial -en una misión de larga duración- que se estrella en un planeta desconocido en el que, a primera vista, no hay vida inteligente. Sin embargo, muy pronto se dará cuenta de que está gobernado por una raza de simios mentalmente muy desarrollados que esclavizan a unos seres humanos que carecen de la facultad de hablar. Cuando su líder, el doctor Zaius, descubre horrorizado que Taylor posee el don de la palabra, decide que hay que eliminarlo','[\n                    \"ElPlanetaDeLosSimios/planet_of_the_apes.jpg\",\n                    \"ElPlanetaDeLosSimios/planet_of_the_apes1.jpg\",\n                    \"ElPlanetaDeLosSimios/planet_of_the_apes2.jpg\",\n                    \"ElPlanetaDeLosSimios/planet_of_the_apes3.jpg\",\n                    \"ElPlanetaDeLosSimios/planet_of_the_apes4.jpg\"\n                ]',0,1),(104,'Alicia en el pais de las maravillas',75,1951,6,'Historia de magia y fantasía en la que la joven Alicia se sumerge en el sorprendente País de las Maravillas y conoce a extraordinarios personajes como Tweedledee y Tweedledum, el Sombrerero Loco, La Reina de Corazones y el frenético Conejo Blanco.','[\n                    \"AliceInWonderland/alice_in_wonderland.jpg\",\n                    \"AliceInWonderland/alice_in_wonderland1.jpg\",\n                    \"AliceInWonderland/alice_in_wonderland2.jpg\",\n                    \"AliceInWonderland/alice_in_wonderland3.jpg\",\n                    \"AliceInWonderland/alice_in_wonderland4.jpg\"\n                ]',0,1);
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
) ENGINE=InnoDB AUTO_INCREMENT=138 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (69,'Jose Gonzalez','Gonzalez123','jose.gonzalez@gmail.com','','123456',1),(70,'Maria Perez','Perez456','maria.perez@gmail.com','','789',2),(71,'joselito','jose','jose@gmail.com','','1234',3),(72,'paola','pao','pao@gmail.com','','1596',1),(73,'Kate','Kate2','kate@gmail.com','','1234',2),(74,'pepito','pepo','pepo@gmail.com','profilePic-profilePic_1712621250921.jpeg.jpeg','1236',3),(75,'lalo','lalo','lalo@gmail.com','profilePic-1712621398883.jpeg','1236',1),(76,'Pepito Perez','PepitoP','pepito@gmail.com','profilePic-1713403115835.png','1234',2),(77,'Prencejo','pren','pren@gmail.com','profilePic-1713731789982.jpeg','3456',3),(78,'Diego','Diego','Diego@gmail.com','profilePic-1713732924983.png','7896',1),(79,'Camila','Cami','Cami@gmail.com','profilePic-1713733405658.png','$2a$10$A714NuFs6HHOlB9dehwpqeCZ5PSr6ZQBOHlF6XZbWGIgGeDA6RLLq',2),(80,'Pedrito','peter','peter@gmail.com','profilePic-1713738627973.png','$2a$10$EbBc5DiM7Lian8gD/gxfFugYlOaXZSAIjMr7iD6kSkNP3qpEoTo3u',3),(81,'Laura Osorio','LauO','lauo@gmail.com','userPic-1714435338197.png','$2a$10$ZtiYsEiqlr3i4TtBO4BgEu5bL85xi3pfalgXcDfwXQY21WzEq.cJa',1),(82,'Miguel Jobssss','Miguel Job','jobsssallendes@gmail.com','userPic-1714437418626.jpg','',2),(83,'Job','Jobsssss','jobs@gmail.com','userPic-1714438099540.jpg','$2a$10$qArm2PC.oja6VrAF48brWeA1N3wU9Fnu0lD8ZulnzFhM1zNnxqIAe',3),(84,'Lorena','Loressss','lorena@gmail.com','userPic-1714495757674.webp','',1),(85,'Jorge ','El Jorge','jorge@gmail.com','userPic-1714499571868.webp','',2),(86,'Berenice Quiroz ','Beressssss','bere@gmail.com','userPic-1715793073045.jpg','',3),(87,'karla Rodríguez ','abraxas','karla@gmail.com','userPic-1715796101089.jpg','$2a$10$70T7wuWdmR3uN.qree/CdObT1VNgkvrG908BTtJMYBQZU7YyPP7Iu',1),(88,'Pepito Perez','PepitP','pepitop@gmail.com','userPic-1715898426029.jpeg','$2a$10$8xpRzErFte1OOB6yGU3tteHzRKpftGxOUuxVUAhn5JUEbOZDFE7d2',2),(89,'Juan Molina','Juanm','juanm@gmail.com','userPic-1715898526780.jpeg','$2a$10$NnidkG/lVND/9E16Hyq2euHNHUaedUf/pf.VEKvnJqg3EyzFrGZE2',3),(90,'Juanito','juanito','juanito@gmail.com','userPic-1715898590080.jpeg','$2a$10$SIlgnmGJ3K.YWmKyBubg3.ik.I4aocHMx4cUZzKCRPDaGWukP55O.',1),(91,'Sutanito','Sutanito','sutanito@gmail.com','userPic-1715898726338.jpeg','$2a$10$ZQji432fgiWYBpzIG6Wvs.KP3FinHGHlepc6fTyS/ndRVvmNcwMl.',2),(92,'perrito1','perrito1','perrito1@gmail.com','userPic-1715898831385.jpeg','$2a$10$6j9FI1OW.yG9tsCjzR6b2OEzndddZ',3),(93,'perrito','perrito2','perrito2@gmail.com','userPic-1715898904004.jpeg','$2a$10$MzVI897tIOVAJ2JPsGe7ue4a6DCtxcZediIwOR20ETORAH26qgN4q',1),(94,'perritos','perrito5','perrito5@gmail.com','userPic-1715899189785.jpeg','$2a$10$2VD2PBghAtrJwnKGqWS8u.gbhrmJsIMAAxj4EwtEX.LfY38N9b97m',2),(95,'Mattia Itan Passaccin ','Matti','matti@gmail.com','userPic-1715902295863.jpg','$2a$10$XJz1Bk3/DgNkqbxXoI/WguApM5W3bkPsH1/qy.eQdsuq0yfuqSNaq',3),(96,'Ritalin','Ritalin ','ritalin@gmail.com','userPic-1715904586482.jpeg','',1),(116,'Mako Mori','Mako','mako@gmail.com','userPic-1716246424183.jpg','$2a$10$zfYwGENxsy3t2g.TJ4ONEOXX.n/7wvbAsNv8UZNgRNi3U/GyP146C',3),(117,'Chula Bonita','Chula','chula@gmail.com','userPic-1716259600661.jpg','$2a$10$84dEDDqRgjEKJg5.56CtROIe7kO2DHbGf5pxHVp7OeHsm9nqbxGDm',3),(118,'Matti Enojón','Enojón','enojon@gmail.com','userPic-1716260645655.jpg','$2a$10$idnCsTzwnCWHOq0UREAOmOaSSdejoE48Ghum65.i14vYM2h6o7e5O',3),(119,'Paco Paco','Paco','paco@gmail.com','userPic-1716322561242.jpeg','$2a$10$BM.V0B2TpaypdzFNv877OeF7F2148GYp7S0.0uDjcJOtj0JN1H1VC',3),(120,'Cuaderno Cuadernin','Cuaderno','cuaderno@gmail.com','userPic-1716323926454.png','$2a$10$8sk/42fAE6mLFoIB9lSkR.2Uxj1QaPLJZw6jV0z8ZaUQcvcPs.2Oi',3),(121,'Sacapuntas Sacapuntin','Sacapuntas','sacapuntas@gmail.com','userPic-1716324163038.jpg','$2a$10$xYhHYIQBckvXfEST/Bui9ejkmSZ7cYWqPsKR18WFhFNPwTDAt4te.',3),(122,'Sonidera Bocina','Bocina','bocina@gmail.com','userPic-1716327837620.jpeg','$2a$10$tFkU9aZbCUJI0m.H.TR8zu9w2.aldh4n7wVF6f/TvxDsNGK.vCV.a',3),(123,'Mike Mouse','Mouse','mouse@gmail.com','userPic-1716328018315.jpg','$2a$10$q7Qyil5pXr8VCb38Ar6sqe.8rAfIzXs0CFGxebb71UYPCnejw2xz6',3),(124,'El remilgoso','El remi','remi@gmail.com','userPic-1716334255079.jpg','$2a$10$i45i5W/tBUpGCbeFx5pxqeO9Can38Ot9WQkKvThV8IY4mYdfq2Y72',3),(125,'Maestro Nuñes','Master','master@gmail.com','userPic-1716338940037.jpg','$2a$10$wwAhQx2JHMaGeQVe/ifPlOein8kJuHXN5kOmKl1VXuE8kGRInzrm2',3),(126,'Pollo Milaneso','Milaneso','milaneso@gmail.com','userPic-1716355306720.jpg','$2a$10$3Y5kylKs.WmoscXgoR7K3u8tFq/QYbyo48l7O09L9OwCqlnvH2nMG',3),(127,'Huggy Wuggy','Huggy Wuggy','huggy@gmail.com','userPic-1716356266736.jpg','$2a$10$rFoJl.ZM/HQxFqwo5WFZL.1NDgS71Yk8fFkEqDn9QP5UQzOpjKQdy',3),(128,'Tennis','Tennis','tennis@gmail.com','userPic-1716357242504.jpeg','$2a$10$io3l1Z87A0QBk3H/dNv2YeYb6LJu4mwuMhWqV3u5oVa25Rrka1Klq',3),(129,'Máximo Décimo Meridio','Máximo','maximo@gmail.com','userPic-1716357428776.jpg','$2a$10$E6ddKsv9Na00tsVwZfxX8uf4T5jjD3vusHp46Zg.hQyD8ZwwYS2t2',3),(130,'Dark Vader','Dark Vader','darkvader@gmail.com','userPic-1716357958237.jpg','$2a$10$tvupQv6JsWtzne6adUIdOOIbc/n3eX4WqYjHf71uI7E/qlPeRk5u6',3),(131,'Dark Vader','Darkh Vader','darkvader@gmail.coms','userPic-1716358052468.jpg','$2a$10$xxYYV6Uw/wc5aqk80Y/peeVZfPgjtZBsG24XmLxOtVuagWgoEnpYe',3),(132,'Clon Trooper','Trooper','clontrooper@gmail.com','userPic-1716358889310.jpg','$2a$10$V561MR0XdOwtRJYvzuqr0e9KjX/5qRXsJYHLZMB5cqGlzbjJROrQu',3),(133,'Clon Trooper 2','Trooper 2','clontrooper2@gmail.com','userPic-1716359754327.jpg','$2a$10$bKgpzhCXd2RFvxM8lvHpdeQFU1tDL6yrnvIF9SHNoJzl7cEl1NwCi',3),(134,'Clon Trooper 3','Trooper 3','clontrooper3@gmail.com','userPic-1716360179074.jpg','$2a$10$4sGc0A4gGdN3uxxAm7DJ7ujP6OLz0QJnjIH.67SSuu4h4cvFOo8Te',3),(135,'Clon Trooper 5','Trooper 5','clontrooper5@gmail.com','userPic-1716361751592.jpg','$2a$10$3MZW4fUTc/AbFaoo5.Iow.UyW9Udpb04IEexp.sPNiy/5/Dsd.JXW',3),(136,'Maynez','Maynez','maynez@gmail.com','userPic-1716361967855.jpg','$2a$10$hmz2JvNCoBwIRrNw7Sg20u1A48dp1ia0JYpD8AbVMYBVb9RZTYb06',3),(137,'Maynez1','Maynez1','maynez1@gmail.com','userPic-1716362360869.jpg','$2a$10$T.fR5ESE4A5j/pza3G6c..eif28JPBCL.ZNqxWcgVdRlsYMR4wWIu',3);
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

-- Dump completed on 2024-05-27 21:44:54
