-- DropForeignKey
ALTER TABLE `products` DROP FOREIGN KEY `products_categorie_name_fkey`;

-- AlterTable
ALTER TABLE `products` MODIFY `categorie_name` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_categorie_name_fkey` FOREIGN KEY (`categorie_name`) REFERENCES `categories`(`name`) ON DELETE SET NULL ON UPDATE CASCADE;
