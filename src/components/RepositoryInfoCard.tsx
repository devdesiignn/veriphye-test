import { Clock, GitFork, Globe, Star } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

type RepositoryInfoCardProps = {
  name: string;
  description?: string;
  stargazerCount: number;
  forkCount: number;
  updatedAt: string;
  primaryLanguage?: { name: string };
  url: string;
};

function RepositoryInfoCard({
  name,
  description,
  stargazerCount,
  forkCount,
  updatedAt,
  primaryLanguage,
  url,
}: RepositoryInfoCardProps) {
  const formattedUpdatedAt = formatDistanceToNow(new Date(updatedAt), { addSuffix: true });

  return (
    <Card key={`${name}: ${stargazerCount}`} className="w-full shadow-xs">
      <CardContent>
        <CardTitle className="mb-3">
          <a
            href={url}
            className="text-base sm:text-lg font-semibold hover:underline"
            target="_blank"
          >
            {name}
          </a>
        </CardTitle>

        {description && (
          <CardDescription className="text-sm text-slate-600">{description}</CardDescription>
        )}

        <div className="flex flex-wrap gap-2 sm:gap-4 mt-2 text-slate-500 text-xs">
          <p className="flex gap-1 items-center">
            <Star className="w-4 h-4" />
            <span>{stargazerCount}</span>
          </p>

          <p className="flex gap-1 items-center">
            <GitFork className="w-4 h-4" />
            <span>{forkCount}</span>
          </p>

          {primaryLanguage && (
            <p className="flex gap-1 items-center">
              <Globe className="w-4 h-4" />
              <span>{primaryLanguage.name}</span>
            </p>
          )}

          <p className="flex gap-1 items-center">
            <Clock className="w-4 h-4" />
            <span>Updated {formattedUpdatedAt}</span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export default RepositoryInfoCard;
