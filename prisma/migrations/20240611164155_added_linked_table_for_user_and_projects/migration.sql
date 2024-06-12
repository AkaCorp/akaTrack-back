-- CreateTable
CREATE TABLE "UsersProjects" (
    "id" TEXT NOT NULL,
    "usersId" TEXT NOT NULL,
    "projectsId" TEXT NOT NULL,

    CONSTRAINT "UsersProjects_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UsersProjects" ADD CONSTRAINT "UsersProjects_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersProjects" ADD CONSTRAINT "UsersProjects_projectsId_fkey" FOREIGN KEY ("projectsId") REFERENCES "Projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
