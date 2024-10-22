-- CreateTable
CREATE TABLE `Workflow_instance` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `workflow_interface_id` INTEGER NOT NULL,
    `organization_id` INTEGER NOT NULL,
    `group_urn` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `subtitle` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `urn` VARCHAR(191) NOT NULL,
    `current_step_urn` VARCHAR(191) NOT NULL,
    `author_urn` VARCHAR(191) NOT NULL,
    `archived` BOOLEAN NOT NULL,
    `completed_at` DATETIME(3) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deleted_at` DATETIME(3) NULL,
    `updated_at` DATETIME(3) NOT NULL,
    `cancelled` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Step_instance` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `urn` VARCHAR(191) NOT NULL,
    `step_event_urn` VARCHAR(191) NOT NULL,
    `workflow_instance_id` INTEGER NOT NULL,
    `step_event_id` INTEGER NOT NULL,
    `is_main_event` BOOLEAN NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `comments` VARCHAR(191) NOT NULL,
    `order` INTEGER NOT NULL,
    `assignee_urn` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `approvable` BOOLEAN NOT NULL,
    `skippable` BOOLEAN NOT NULL,
    `cancellable` BOOLEAN NOT NULL,
    `approved` BOOLEAN NOT NULL,
    `skipped` BOOLEAN NOT NULL,
    `cancelled` BOOLEAN NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deleted_at` DATETIME(3) NULL,
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Workflow_interface` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `urn` VARCHAR(191) NOT NULL,
    `organization_id` INTEGER NOT NULL,
    `group_urn` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `subtitle` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `author_urn` VARCHAR(191) NOT NULL,
    `activated_at` DATETIME(3) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deleted_at` DATETIME(3) NULL,
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Workflow_step` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `urn` VARCHAR(191) NOT NULL,
    `workflow_interface_id` INTEGER NOT NULL,
    `step_event_urn` VARCHAR(191) NOT NULL,
    `step_event_id` INTEGER NOT NULL,
    `is_main_event` BOOLEAN NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `order` INTEGER NOT NULL,
    `assignee_urn` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `approvable` BOOLEAN NOT NULL,
    `skippable` BOOLEAN NOT NULL,
    `cancellable` BOOLEAN NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deleted_at` DATETIME(3) NULL,
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Step_event_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `slug` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `is_main_event` BOOLEAN NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deleted_at` DATETIME(3) NULL,
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Workflow_instance` ADD CONSTRAINT `Workflow_instance_workflow_interface_id_fkey` FOREIGN KEY (`workflow_interface_id`) REFERENCES `Workflow_interface`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Step_instance` ADD CONSTRAINT `Step_instance_workflow_instance_id_fkey` FOREIGN KEY (`workflow_instance_id`) REFERENCES `Workflow_instance`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Step_instance` ADD CONSTRAINT `Step_instance_step_event_id_fkey` FOREIGN KEY (`step_event_id`) REFERENCES `Step_event_type`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Workflow_step` ADD CONSTRAINT `Workflow_step_workflow_interface_id_fkey` FOREIGN KEY (`workflow_interface_id`) REFERENCES `Workflow_interface`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Workflow_step` ADD CONSTRAINT `Workflow_step_step_event_id_fkey` FOREIGN KEY (`step_event_id`) REFERENCES `Step_event_type`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
