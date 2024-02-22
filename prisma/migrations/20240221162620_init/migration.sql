-- CreateTable
CREATE TABLE "recipes" (
    "id" VARCHAR(255) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "chapter" VARCHAR(255) NOT NULL,
    "bodyText" TEXT NOT NULL,
    "servings" VARCHAR(255),
    "page" VARCHAR(255),
    "html" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "recipes_id_key" ON "recipes"("id");
