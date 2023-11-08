-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: productostienda
-- ------------------------------------------------------
-- Server version	8.0.31

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
-- Table structure for table `producto`
--

DROP TABLE IF EXISTS `producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producto` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(45) NOT NULL,
  `precio` decimal(10,0) DEFAULT NULL,
  `imagen` varchar(256) DEFAULT NULL,
  `deleted` tinyint DEFAULT NULL,
  `category` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto`
--

LOCK TABLES `producto` WRITE;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
INSERT INTO `producto` VALUES (9,'AndesVerde',1200,'https://raw.githubusercontent.com/MatiasMichaux98/ecommers/master/cliente/media/img/2.jpg',0,'Andes'),(10,'Schneider',800,'https://raw.githubusercontent.com/MatiasMichaux98/ecommers/master/cliente/media/img/12.jpg',0,'Schneider'),(11,'QuilmesStout',1000,'https://raw.githubusercontent.com/MatiasMichaux98/ecommers/master/cliente/media/img/11.jpg',0,'Quilmes'),(12,'Stella',900,'https://raw.githubusercontent.com/MatiasMichaux98/ecommers/master/cliente/media/img/13.jpg',0,'Stella'),(13,'QuilmesRedLager',1000,'https://raw.githubusercontent.com/MatiasMichaux98/ecommers/master/cliente/media/img/9.jpg',0,'Quilmes'),(14,'QuilmesClasica',1200,'https://raw.githubusercontent.com/MatiasMichaux98/ecommers/master/cliente/media/img/8.jpg',0,'Quilmes'),(15,'ImperialLager',1500,'https://raw.githubusercontent.com/MatiasMichaux98/ecommers/master/cliente/media/img/7.jpg',0,'Imperial'),(16,'ImperialCream',1500,'https://raw.githubusercontent.com/MatiasMichaux98/ecommers/master/cliente/media/img/6.jpg',0,'Imperial'),(17,'EstrellaGalicia',500,'https://raw.githubusercontent.com/MatiasMichaux98/ecommers/master/cliente/media/img/4.jpg',0,'EstrellaGalicia'),(18,'AndesRojaIPA',1200,'https://raw.githubusercontent.com/MatiasMichaux98/ecommers/master/cliente/media/img/1.jpg',0,'Andes'),(19,'CoronaLata',800,'https://raw.githubusercontent.com/MatiasMichaux98/ecommers/master/cliente/media/img/3.jpg',0,'Corona'),(20,'Heineken',1000,'https://raw.githubusercontent.com/MatiasMichaux98/ecommers/master/cliente/media/img/5.jpg',0,'Heineken'),(21,'Quilmes',1000,'https://raw.githubusercontent.com/MatiasMichaux98/ecommers/master/cliente/media/img/14.jpg',0,'Quilmes'),(22,'AndesNegra',1300,'https://raw.githubusercontent.com/MatiasMichaux98/ecommers/master/cliente/media/img/15.jpg',0,'Andes'),(23,'AndesRoja',1200,'https://raw.githubusercontent.com/MatiasMichaux98/ecommers/master/cliente/media/img/16.jpg',0,'Andes');
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productoonline`
--

DROP TABLE IF EXISTS `productoonline`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productoonline` (
  `id` int NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `precio` int DEFAULT NULL,
  `img` longblob,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productoonline`
--

LOCK TABLES `productoonline` WRITE;
/*!40000 ALTER TABLE `productoonline` DISABLE KEYS */;
/*!40000 ALTER TABLE `productoonline` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-30 22:07:07
