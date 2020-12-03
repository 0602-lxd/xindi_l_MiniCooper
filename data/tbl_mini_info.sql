-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1:3306
-- 產生時間： 2020 年 11 月 25 日 12:38
-- 伺服器版本： 5.7.31
-- PHP 版本： 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `db_minicooper`
--

-- --------------------------------------------------------

--
-- 資料表結構 `tbl_mini_info`
--

DROP TABLE IF EXISTS `tbl_mini_info`;
CREATE TABLE IF NOT EXISTS `tbl_mini_info` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(20) NOT NULL,
  `Price` varchar(60) NOT NULL,
  `Description` text NOT NULL,
  `Images` varchar(60) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `tbl_mini_info`
--

INSERT INTO `tbl_mini_info` (`ID`, `Name`, `Price`, `Description`, `Images`) VALUES
(1, 'MINI 3 DOOR', '$23,490', 'It’s the original icon, reborn and reimagined for modern motoring. The MINI 3 door builds on 60+ years of timeless MINI design, but comes equipped with a whole host of 21st century tech features and practical touches to cater to your every need. Distinct by design and urban by nature, it’s made to stand out as you explore new corners of your city. And with its ultra-nimble go-kart feel, you’re sure to find something exciting around every turn.', 'mini3.png'),
(2, 'MINI CONVERTIBLE', '$30,090', 'Open top. Open road. Open-ended possibilities. The MINI Convertible brings together three generations of MINI design, but boasts a personality that is all its own. With comfortable seating for four and a 3-in-1 Soft Top that can function as a sunroof or a full-fledged drop-top, it’s always ready for your next open-air adventure. And with a lively Twin Power Turbo Engine capable of hitting 100 km/h in a blistering 6.6 seconds (in the John Cooper Works variant), it’s sure to offer a few hair-raising thrills along the way.', 'convertible.png'),
(3, 'MINI CLUBMAN ALL4', '$29,990', 'Allow us to introduce you to the most sophisticated MINI ever made. Superbly crafted with sleek exterior contours, refined cockpit accents, and quality materials throughout, the MINI Clubman is designed to make an impression everywhere it goes. And with a generously sized interior plus ALL4 All-Wheel Drive as standard, it boasts as much practicality as it does personality. Get in, get comfortable, and let the MINI Clubman open more doors to new experiences', 'all4.png');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
