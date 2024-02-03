-- CreateTable
CREATE TABLE "recipes" (
    "id" VARCHAR(255) NOT NULL,
    "title" VARCHAR(255),
    "section" VARCHAR(255),
    "page" VARCHAR(255),
    "servings" VARCHAR(255),
    "body" JSONB
);

-- CreateIndex
CREATE UNIQUE INDEX "recipes_id_key" ON "recipes"("id");

