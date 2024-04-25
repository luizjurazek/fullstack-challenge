CREATE SCHEMA IF NOT EXISTS `pizzaria` DEFAULT CHARACTER SET utf8 ;
USE `pizzaria` ;

CREATE TABLE IF NOT EXISTS `pizzaria`.`Pizza` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `price` DECIMAL(10,2) NOT NULL,
  `ingredients` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `pizzaria`.`Order` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `dateTime` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `pizzaria`.`OrderItem` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_pizza` INT NOT NULL,
  `id_order` INT NOT NULL,
  `quantity` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_Pizza_has_Order_Pizza`
    FOREIGN KEY (`id_pizza`)
    REFERENCES `pizzaria`.`Pizza` (`id`),
  CONSTRAINT `fk_Pizza_has_Order_Order1`
    FOREIGN KEY (`id_order`)
    REFERENCES `pizzaria`.`Order` (`id`)
);