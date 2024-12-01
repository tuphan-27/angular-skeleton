BUCKET_NAME="s3-bucket"
DIRECTORY="dist/app"

# Cache-Control headers
ONE_YEAR_CACHE="public, max-age=31536000"
NO_CACHE="no-cache, must-revalidation"

aws s3 cp "$DIRECTORY" "$BUCKET_NAME" --recursive --exclude "*" --include "*.css" --include "*.js" --cache-control "$ONE_YEAR_CACHE"
aws s3 cp "$DIRECTORY" "$BUCKET_NAME" --recursive --exclude "*.js" --exclude "*.css" --cache-control "$NO_CACHE"
