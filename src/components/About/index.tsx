import ProfilePic from '../../assets/img/DSC01603.jpeg';
import SocialRow from '../SocialRow';

export default function About() {
    return (
        <div>
            <div className="flex flex-col-reverse sm:flex-row w-full">
                <div className='sm:w-[60%] sm:pr-3'>
                    <h1 className="mt-3 text-6xl font-bold">Alex Lau</h1>
                    <div className='mt-4 leading-relaxed sm:leading-loose text-lg tracking-wider'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur posuere tincidunt nulla in egestas. Etiam in aliquam ipsum, in sagittis ex. Duis fermentum commodo malesuada. Sed consequat magna eu nunc tempus ultrices. Vivamus nisi sem, varius non mi quis, tempor gravida ipsum. Vestibulum sodales, leo et ultrices pellentesque, lorem ipsum pharetra quam, quis dapibus neque felis eu diam. Nunc pellentesque massa eu nibh congue condimentum. Donec eget sem vitae neque dignissim eleifend. Aliquam quis lacus ante. Sed in lectus et dui elementum scelerisque sit amet eu leo. Fusce volutpat dolor et est viverra porttitor.
                        </p>
                        <p className='mt-3'>
                            Integer fringilla enim justo, nec ullamcorper enim fringilla at. Donec ullamcorper mollis varius. Curabitur vitae magna nec mi dignissim suscipit eget sed lorem. Nam interdum consequat luctus. Cras vel nisl eu mi dignissim pellentesque et non velit. Fusce et accumsan elit, eu ultricies enim. Sed malesuada eget ex vel pellentesque. Maecenas consectetur vel massa in fringilla. Quisque a lacus mattis libero pulvinar commodo quis sed urna. Proin at nulla sapien.
                        </p>
                        <p className='mt-3'>
                            Mauris malesuada purus tristique pretium convallis. Mauris rutrum leo vel metus malesuada, et ullamcorper libero vulputate. Maecenas pharetra vitae est non hendrerit. Fusce nec nulla enim. Etiam rutrum sem a neque venenatis tincidunt. Vestibulum sed eros purus. Integer cursus dictum ullamcorper. Maecenas eu metus ut nulla ornare tristique sit amet mollis risus.
                        </p>
                    </div>
                </div>
                <div className='sm:w-[40%]'>
                    <img src={ProfilePic} />
                    <div>
                        <SocialRow />
                    </div>
                </div>
            </div>
        </div>
    )
}