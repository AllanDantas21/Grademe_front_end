import StarButton from './Star';

export default function Header() {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1 flex justify-center">
                <a className="text-black btn btn-ghost text-xl pr-2">Visit grademe.fr</a>
                <StarButton />
            </div>
        </div>
    );
}