-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Erstellungszeit: 14. Mrz 2023 um 15:16
-- Server-Version: 10.5.19-MariaDB
-- PHP-Version: 7.4.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `nuxtserver1`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `eventdatajson`
--

CREATE TABLE `eventdatajson` (
  `eventdata` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Daten für Tabelle `eventdatajson`
--

INSERT INTO `eventdatajson` (`eventdata`) VALUES
('[{\"timestamp\":\"2023-03-15T18:00\",\"title\":\"Informationsabend zur Ganztagesklasse\",\"details\":\"Das Treffen findet am WGG im Erdgeschoss statt\"},{\"timestamp\":\"2023-03-16T19:00\",\"title\":\"Informationsabend zur Wahl der 2. Fremdsprache\",\"details\":\"Für die Eltern der 5. Klassen online; der Link sowie weitere Informationen gehen den Eltern rechtzeitig zu.\"},{\"timestamp\":\"2023-03-31T00:00\",\"title\":\"Ostergottesdienste\",\"details\":\"Für die 8. bis 12. Klassen\"},{\"timestamp\":\"2023-03-31T00:00\",\"title\":\"letzer Schultag vor den Osterferien\",\"details\":\"Unterrichtsschluss um 12.15\"},{\"timestamp\":\"2023-04-01T00:00\",\"title\":\"Osterferien!\",\"details\":\"bis 16. April\"},{\"timestamp\":\"2023-04-21T00:00\",\"title\":\"Ausgabe der 3. Leistungsberichte\",\"details\":\"für die Jahrgansstufen 5 - 10\"},{\"timestamp\":\"2023-04-24T16:00\",\"title\":\"2. Elternsprechtag\",\"details\":\"für die Eltern der Schüler:innen der Jgst. 5 - 11. Endet um 19:00.\"},{\"timestamp\":\"2023-04-26T00:00\",\"title\":\"Abitur Deutsch\",\"details\":\"schriftliche Prüfung in Deutsch\"}]');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `user`
--

CREATE TABLE `user` (
  `id` int(10) UNSIGNED NOT NULL,
  `username` varchar(255) NOT NULL,
  `hash` varchar(255) NOT NULL,
  `superadmin` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Daten für Tabelle `user`
--

INSERT INTO `user` (`id`, `username`, `hash`, `superadmin`) VALUES
(1, 'alex', '$2a$10$KYHpLfhsqNM4v8srYlhjjeGgYhyZegy5gRqO9K7O86haLAuBFMwI2', 1),
(3, 'wechsler', '$2b$10$BqSnGLtx.Q.3tRFqMBNUjulUVFzzwP6PLEO9z18sJFzKWSIubFOD.', 0);

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `user`
--
ALTER TABLE `user`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
